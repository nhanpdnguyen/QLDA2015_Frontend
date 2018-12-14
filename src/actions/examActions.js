import { CHANGE_USER_ANSWER_IN_EXAM, RECEIVE_EXAMINATION_LIST, RECEIVE_EXAMINATION_TITLE_LIST, SAVE_EXAM_INFO, RECEIVE_EXAM_RESULT, CLEAR_EXAM_RESULT, SET_EXAM_TIMER, CLEAR_CURRENT_EXAM_LIST } from "./actionTypes";

import config from '../config';
import { requestApi, requestFail } from './requestActions';
import { GET, POST } from '../constants';

const EXAMINATION_API_BASE_URL = config.EXAMINATION_API_BASE_URL;



export const getExaminationById = function (examId) {
  return (dispatch) => {
    dispatch(requestApi(GET, EXAMINATION_API_BASE_URL + `/exam/${examId}`)).then(result => {
      console.log(result.data);
      if (result.data.listQuestion) 
        dispatch(receiveExaminationList(result.data.listQuestion));
      else 
        dispatch(requestFail('Something went wrong, try again'));
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

export const getExamListByCategory = function (categoryName, time) {
  return (dispatch) => {
    dispatch(requestApi(GET, EXAMINATION_API_BASE_URL + '/list_exam/' + categoryName + '/time?time=' + time)).then(result => {
      dispatch(requestApi(GET, EXAMINATION_API_BASE_URL + '/info_exam_user/' + time));    
      if (result.data.listExam) {
        dispatch(receiveExaminationTitleList(result.data.listExam));

      }
      else dispatch(requestFail('Something went wrong, try again'));
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

export const receiveExaminationTitleList = (data) => ({
  type: RECEIVE_EXAMINATION_TITLE_LIST,
  data
})

export const receiveExaminationList = (data) => ({
  type: RECEIVE_EXAMINATION_LIST,
  data
})

export const sendResultExam = (examId, type, title, data) => {
  return (dispatch) => {
    dispatch(requestApi(POST, EXAMINATION_API_BASE_URL + `/answer/${type}/${examId}`, data)).then(result => {
      dispatch(receiveExamResult(result.data));
    })
  }
}

export const saveExamInfo = (data) => ({
  type: SAVE_EXAM_INFO,
  data,
})

export const changeUserAnswerInExam = (data, index) => ({
  type: CHANGE_USER_ANSWER_IN_EXAM,
  data,
  index
})

export const receiveExamResult = function (examResult) {
  return {
    type: RECEIVE_EXAM_RESULT,
    examResult
  }
}

export const clearExamResult = function () {
  return {
    type: CLEAR_EXAM_RESULT
  }
}

export const setExamTimer = function (time) {
  return {
    type: SET_EXAM_TIMER,
    time: time
  }
}

export const clearCurrentExamList = () => {
  return {
    type: CLEAR_CURRENT_EXAM_LIST
  }
}

