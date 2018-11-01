import axios from 'axios';
import { REQUESTING, REQUEST_SUCCESS, REQUEST_FAIL, SIGN_IN_SUCCESS } from './actionTypes';

//http method
const GET = 'GET';
const POST = 'POST';
const PUT = 'PUT';

//signIn method
const NORMAL_SIGN_IN = 'NORMAL_SIGN_IN';
const FACEBOOK_SIGN_IN = 'FACEBOOK_SIGN_IN';
const GOOGLE_SIGN_IN = 'GOOGLE_SIGN_IN';

//URL const
const BASE_URL = 'http://103.114.107.16:8001/api';

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
  return (dispatch) => {
    dispatch(requesting());
    switch (method) {
      case GET: {
        return axios.get(url).then(result => {
          dispatch(requestSuccess(result));
          return Promise.resolve(result);
        }, err => {
          console.log(err);
          dispatch(requestFail(err));
          return Promise.reject(err);
        })
        // break;
      }
      case POST: {
        return axios.post(url, data).then(result => {
          console.log(result);
          dispatch(requestSuccess(result));
          return Promise.resolve(result);
        }, err => {
          console.log(err);
          dispatch(requestFail(err));
          return Promise.reject(err);
        })
        // break;
      }
      case PUT: {
        return axios.put(url, data).then(result => {
          dispatch(requestSuccess(result));
          return Promise.resolve(result);
        }, err => {
          console.log(err);
          dispatch(requestFail(err));
          Promise.reject(err);
        })
        // break;
      }
      default: dispatch(requestFail("Unknown method"))
    }
  }
}

export const signIn = function (userName, password, method = NORMAL_SIGN_IN) {
  return (dispatch) => {
    switch (method) {
      case NORMAL_SIGN_IN: {
        let data = {
          username: userName,
          password: password
        }
        dispatch(requestApi(POST, BASE_URL + '/account', data)).then(result => {
          console.log(result);
        }, err => console.log(err.response));

        break;
      }
      case FACEBOOK_SIGN_IN: {
        break;
      }
      case GOOGLE_SIGN_IN: {
        break;
      }
      default: throw new Error('Unknown sign in method');
    }
  }
}

