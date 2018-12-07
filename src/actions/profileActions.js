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
    dispatch(requestApi(GET, ACCOUNT_API_BASE_URL + '/account/profile')).then(result => {
      if (result.data.success) dispatch(receiveProfile(result.data.profile));
      else dispatch(requestFail('Something went wrong, try again'));
    }, err => {
      console.log(err.response)
      let status = err.response && err.response.status;
      switch (status) {
        case 401: 
        case 403: {
          dispatch(requestFail('Not authorized'));
          dispatch(signOut());
          break;
        }
        default: dispatch(requestFail('Something went wrong, try again'))
      }
    })
  }
}

export const updateUserProfile = function (profile) {
  return (dispatch) => {
    dispatch(requestApi(POST, ACCOUNT_API_BASE_URL + '/account/profile', profile)).then(result => {
      console.log(result);
      if (result.data.success) dispatch(receiveProfile(result.data.profile));
      else dispatch(requestFail('Something went wrong, try again'));
    }, err => {
      console.log(err);
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