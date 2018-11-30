import axios from 'axios';

import {
  REQUESTING, REQUEST_SUCCESS, REQUEST_FAIL,
} from './actionTypes';

import {
  GET, POST, PUT,
} from "../constants";

export const requesting = function () {
  return ({
    type: REQUESTING
  })
}

export const requestSuccess = function (result) {
  return ({
    type: REQUEST_SUCCESS,
    result: result
  })
}

export const requestFail = function (err) {
  return ({
    type: REQUEST_FAIL,
    err: err
  })
}

export const requestApi = function (method, url, data) {
  return (dispatch, getState) => {
    dispatch(requesting());
    let state = getState();
    console.log('accesstoken', state.auth.accessToken)
    let axiosConfig = {
      headers: {
        'Authorization': state.auth.accessToken
      }
    }
    switch (method) {
      case GET: {
        return axios.get(url, axiosConfig);
      }
      case POST: {
        return axios.post(url, data, axiosConfig);
      }
      case PUT: {
        return axios.put(url, data, axiosConfig);
      }
      default: dispatch(requestFail("Unknown method"))
    }
  }
}