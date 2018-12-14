import { RECEIVE_LEADER_BOARD } from "./actionTypes";
import { requestApi, requestFail } from "./requestActions";
import { GET } from "../constants";
import config from '../config';

const EXAMINATION_API_BASE_URL = config.EXAMINATION_API_BASE_URL;

export const getLeaderBoard = function () {
  return (dispatch) => {
    let d = new Date();
    //d.setDate(0); //go back last month
    let thisMonth = d.getMonth() + 1;
    let thisYear = d.getFullYear();
    dispatch(requestApi(GET, EXAMINATION_API_BASE_URL + `/list_point_exam/5/time?time=${thisMonth}_${thisYear}`)).then(result => {
      dispatch(receiveLeaderBoard(result.data.listPointExam));
    }, err => {
      console.log(err.response)
      let status = err.response && err.response.status;
      switch (status) {
        case 401: {
          dispatch(requestFail('Not authorized'));
          break;
        }
        default: dispatch(requestFail('Something went wrong, try again'))
      }
    })
  }
}

export const receiveLeaderBoard = (list) => {
  return {
    type: RECEIVE_LEADER_BOARD,
    list
  }
}
