import {
  RECEIVE_PROFILE
} from './actionTypes';

import {
  GET, POST
} from "../constants";

import config from '../config';
import { requestApi, requestFail } from './requestActions';
import { signOut } from './accountActions';
const ACCOUNT_API_BASE_URL = config.ACCOUNT_API_BASE_URL;

//USER PROFILE
export const receiveProfile = function (profile) {
  return {
    type: RECEIVE_PROFILE,
    profile: profile
  }
}

export const getUserProfile = function () {
  return (dispatch) => {
    dispatch(requestApi(GET, ACCOUNT_API_BASE_URL + '/profile')).then(result => {
      if (result.data.success) dispatch(receiveProfile(result.data.profile));
      else dispatch(requestFail('Xảy ra lỗi, vui lòng thử lại'));
    }, err => {
      console.log(err.response)
      let status = err.response && err.response.status;
      switch (status) {
        case 401: 
        case 403: {
          dispatch(requestFail('Hết hạn truy cập, vui lòng đăng nhập và thử lại'));
          dispatch(signOut());
          break;
        }
        default: dispatch(requestFail('Xảy ra lỗi, vui lòng thử lại'))
      }
    })
  }
}

export const updateUserProfile = function (profile) {
  return (dispatch) => {
    dispatch(requestApi(POST, ACCOUNT_API_BASE_URL + '/profile', profile)).then(result => {
      if (result.data.success) dispatch(receiveProfile(result.data.profile));
      else dispatch(requestFail('Xảy ra lỗi, vui lòng thử lại'));
    }, err => {
      console.log(err);
      let status = err.response && err.response.status;
      switch (status) {
        case 401: {
          dispatch(requestFail('Hết hạn truy cập, vui lòng đăng nhập và thử lại'));
          dispatch(signOut());
          break;
        }
        default: dispatch(requestFail('Xảy ra lỗi, vui lòng thử lại'))
      }
    })
  }
}