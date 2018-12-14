import {
  SIGN_IN_SUCCESS, SIGN_IN_FAIL,
  SIGN_UP_SUCCESS, SIGN_UP_FAIL, SIGN_OUT_SUCCESS
} from './actionTypes';

import {
  POST, PUT,
  NORMAL_SIGN_IN, FACEBOOK_SIGN_IN, GOOGLE_SIGN_IN,
  NORMAL_SIGN_UP,
  NORMAL_SIGN_OUT, FACEBOOK_SIGN_OUT, GOOGLE_SIGN_OUT,
  SET_SIGNUP_FALSE,
  RESET_PROFILE
} from "../constants";

import config from '../config';
import { requestApi, requesting } from './requestActions';
import { getUserProfile } from './profileActions';

const ACCOUNT_API_BASE_URL = config.ACCOUNT_API_BASE_URL;

//SIGN IN
export const signInSuccess = function (accessToken) {
  localStorage.setItem('accessToken', accessToken);
  return ({
    type: SIGN_IN_SUCCESS,
    accessToken: accessToken
  })
}

export const signInFail = function (errMessage) {
  alert(errMessage);
  return ({
    type: SIGN_IN_FAIL,
    errMessage: errMessage
  })
}

export const signIn = function (userName, password, accessToken, method = NORMAL_SIGN_IN) {
  return (dispatch) => {
    switch (method) {
      case NORMAL_SIGN_IN: {
        let data = {
          userName: userName,
          passWord: password
        }
        dispatch(requestApi(POST, ACCOUNT_API_BASE_URL + '/', data)).then(result => {
          if (result.data.success) {
            //set token
            dispatch(signInSuccess(result.data.value.access_token));
            //get profile
            dispatch(getUserProfile());
          }
          else dispatch(signInFail('Tên hoặc mật khẩu không hợp lệ'));
        }, err => {
          console.log(err.response)
          let status = err.response && err.response.status;
          switch (status) {
            case 401: {
              dispatch(signInFail('Tên hoặc mật khẩu không hợp lệ'));
              break;
            }
            default: dispatch(signInFail('Xảy ra lỗi, vui lòng thử lại'))
          }
        });
        break;
      }
      case FACEBOOK_SIGN_IN: {
        if (accessToken) {
          let data = {
            access_token: accessToken
          }
          dispatch(requestApi(POST, ACCOUNT_API_BASE_URL + '/facebook', data)).then(result => {
            if (result.data.success) {
              //set token
              dispatch(signInSuccess(result.data.value.access_token));
              //get profile
              dispatch(getUserProfile());
            }
            else dispatch(signInFail('Tên hoặc mật khẩu không hợp lệ'));
          }, err => {
            console.log(err.response)
            let status = err.response && err.response.status;
            switch (status) {
              case 401: {
                dispatch(signInFail('Tên hoặc mật khẩu không hợp lệ'));
                break;
              }
              default: dispatch(signInFail('Xảy ra lỗi, vui lòng thử lại'))
            }
          })
        } else dispatch(signInFail('Tên hoặc mật khẩu không hợp lệ'))
        break;
      }
      case GOOGLE_SIGN_IN: {
        if (accessToken) {
          let data = {
            access_token: accessToken
          }
          dispatch(requestApi(POST, ACCOUNT_API_BASE_URL + '/google', data)).then(result => {
            if (result.data.success) {
              //set token
              dispatch(signInSuccess(result.data.value.access_token));
              //get profile
              dispatch(getUserProfile());
            }
            else dispatch(signInFail('Tên hoặc mật khẩu không hợp lệ'));
          }, err => {
            console.log(err.response)
            let status = err.response && err.response.status;
            switch (status) {
              case 401: {
                dispatch(signInFail('Tên hoặc mật khẩu không hợp lệ'));
                break;
              }
              default: dispatch(signInFail('Xảy ra lỗi, vui lòng thử lại'))
            }
          })
        } else dispatch(signInFail('Xảy ra lỗi, vui lòng thử lại'))
        break;
      }
      default: throw new Error('Unknown sign in method');
    }
  }
}

//SIGN UP
export const signUpSuccess = function (accessToken) {
  localStorage.setItem('accessToken', accessToken);
  return ({
    type: SIGN_UP_SUCCESS,
    accessToken: accessToken
  })
}

export const signUpFail = function (errMessage) {
  alert(errMessage);
  return ({
    type: SIGN_UP_FAIL,
    errMessage: errMessage
  })
}

export const signUp = function (data, method = NORMAL_SIGN_UP, history) {
  return (dispatch) => {
    switch (method) {
      case NORMAL_SIGN_UP: {
        dispatch(requestApi(PUT, ACCOUNT_API_BASE_URL + '/', data)).then(result => {
          if (result.data.success) {
            //set token
            dispatch(signUpSuccess(result.data.value.access_token));
            //get profile
            dispatch(getUserProfile());
            //switch route
            history.push('/cap-nhat-tai-khoan');
          }
          else dispatch(signUpFail('Xảy ra lỗi, vui lòng thử lại'));
        }, err => {
          console.log(err.response)
          let status = err.response && err.response.status;
          switch (status) {
            case 401: {
              dispatch(signUpFail('Tên đăng nhập hoặc email đã tồn tại'));
              break;
            }
            default: dispatch(signUpFail('Xảy ra lỗi, vui lòng thử lại'))
          }
        });
        break;
      }
      default: throw new Error('Unknown sign up method');
    }
  }
}

//SIGN OUT
export const signOutSuccess = function () {
  localStorage.removeItem('accessToken');
  return {
    type: SIGN_OUT_SUCCESS
  }
}

export const signOut = function (method = NORMAL_SIGN_OUT) {
  return (dispatch) => {
    switch (method) {
      case NORMAL_SIGN_OUT: {
        dispatch(requesting());
        dispatch(signOutSuccess());
        dispatch(resetProfile());
        break;
      }
      case FACEBOOK_SIGN_OUT: {
        window.FB.logout();
        dispatch(signOutSuccess());
        dispatch(resetProfile());
        break;
      }
      case GOOGLE_SIGN_OUT:
        {
          let auth2 = window.gapi.auth2.getAuthInstance();
          auth2.signOut().then(() => {
            dispatch(signOutSuccess());
            dispatch(resetProfile());
          })
          break;
        }
      default: throw new Error('Unknown sign out method');
    }
  }
}

//tai code
export const setSignUpFalse = (payload) => ({
  type: SET_SIGNUP_FALSE,
  payload:{
    isSignUp: payload.isSignUp,
  }
})

export const resetProfile = () => ({
  type: RESET_PROFILE,
})
