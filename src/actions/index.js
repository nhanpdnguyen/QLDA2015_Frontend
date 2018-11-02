import axios from 'axios';
import { REQUESTING, REQUEST_SUCCESS, REQUEST_FAIL, SIGN_IN_SUCCESS, SIGN_IN_FAIL, SIGN_UP_SUCCESS, SIGN_UP_FAIL, SIGN_OUT_SUCCESS } from './actionTypes';
import { GET, POST, PUT, NORMAL_SIGN_IN, FACEBOOK_SIGN_IN, GOOGLE_SIGN_IN, NORMAL_SIGN_UP, FACEBOOK_SIGN_UP, GOOGLE_SIGN_UP, NORMAL_SIGN_OUT, FACEBOOK_SIGN_OUT, GOOGLE_SIGN_OUT } from "../constants";

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
        return axios.get(url);
        // break;
      }
      case POST: {
        return axios.post(url, data);
        // break;
      }
      case PUT: {
        return axios.put(url, data);
        //break;
      }
      default: dispatch(requestFail("Unknown method"))
    }
  }
}

export const signInSuccess = function (accessToken) {
  localStorage.setItem('accessToken', accessToken);
  return ({
    type: SIGN_IN_SUCCESS,
    accessToken: accessToken
  })
}

export const signInFail = function (errMessage) {
  return ({
    type: SIGN_IN_FAIL,
    errMessage: errMessage
  })
}

export const signIn = function (userName, password, method = NORMAL_SIGN_IN) {
  return (dispatch) => {
    switch (method) {
      case NORMAL_SIGN_IN: {
        let data = {
          userName: userName,
          passWord: password
        }
        dispatch(requestApi(POST, BASE_URL + '/account', data)).then(result => {
          console.log(result.data.success);
          if (result.data.success) dispatch(signInSuccess(result.data.value.access_token));
          else dispatch(signInFail('Tên hoặc mật khẩu không hợp lệ'));
        }, err => {
          console.log(err.response)
          let status = err.response && err.response.status;
          switch (status) { 
            case 401: {
              dispatch(signInFail('Sai tên hoặc mật khẩu'));
              break;
            }
            default: dispatch(signInFail('Something went wrong, try again'))
          }
        });
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

export const signUpSuccess = function (accessToken) {
  localStorage.setItem('accessToken', accessToken);
  return ({
    type: SIGN_UP_SUCCESS,
    accessToken: accessToken
  })
}

export const signUpFail = function (errMessage) {
  return ({
    type: SIGN_UP_FAIL,
    errMessage: errMessage
  })
}

export const signUp = function (firstName, userName, password, rePassword, email, method = NORMAL_SIGN_UP) {
  return (dispatch) => {
    switch (method) {
      case NORMAL_SIGN_UP: {
        let data = {
          userName: userName,
          passWord: password,
          rePassWord: rePassword,
          //TESTING PURPOSE
          email: 'abc@test.com'
        }
        dispatch(requestApi(PUT, BASE_URL + '/account', data)).then(result => {
          console.log(result);
          if (result.data.success) dispatch(signUpSuccess(result.data.value.access_token));
          else dispatch(signUpFail(result.data.message));
        }, err => {
          console.log(err.response)
          let status = err.response && err.response.status;
          switch (status) {
            case 401: {
              dispatch(signUpFail('Tên đăng nhập đã tồn tại'));
              break;
            }
            default: dispatch(signUpFail('Something went wrong, try again'))
          }
        });
        break;
      }
      case FACEBOOK_SIGN_UP: {
        break;
      }
      case GOOGLE_SIGN_UP: {
        break;
      }
      default: throw new Error('Unknown sign up method');
    }
  }
}

export const signOutSuccess = function () {
  localStorage.removeItem('accessToken');
  return {
    type: SIGN_OUT_SUCCESS
  }
}

export const signOut = function(method = NORMAL_SIGN_OUT) {
  return (dispatch) => {
    switch(method) {
      case NORMAL_SIGN_OUT: {
        dispatch(requesting());
        dispatch(signOutSuccess());
        break;
      }
      case FACEBOOK_SIGN_OUT:
      case GOOGLE_SIGN_OUT:
      break;
      default: throw new Error('Unknow sign out method');
    }
  }
}