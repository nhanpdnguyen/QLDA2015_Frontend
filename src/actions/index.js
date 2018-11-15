import axios from 'axios';
import {
  REQUESTING, REQUEST_SUCCESS, REQUEST_FAIL,
  SIGN_IN_SUCCESS, SIGN_IN_FAIL,
  SIGN_UP_SUCCESS, SIGN_UP_FAIL, SIGN_OUT_SUCCESS, RECEIVE_PROFILE
} from './actionTypes';

import {
  GET, POST, PUT,
  NORMAL_SIGN_IN, FACEBOOK_SIGN_IN, GOOGLE_SIGN_IN,
  NORMAL_SIGN_UP,
  NORMAL_SIGN_OUT, FACEBOOK_SIGN_OUT, GOOGLE_SIGN_OUT
} from "../constants";

//URL const
const BASE_URL = 'http://103.114.107.16:8001/api';

//REQUEST
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
        // break;
      }
      case POST: {
        return axios.post(url, data, axiosConfig);
        // break;
      }
      case PUT: {
        return axios.put(url, data, axiosConfig);
        //break;
      }
      default: dispatch(requestFail("Unknown method"))
    }
  }
}

//SIGN IN
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

export const signIn = function (userName, password, accessToken, method = NORMAL_SIGN_IN) {
  return (dispatch) => {
    switch (method) {
      case NORMAL_SIGN_IN: {
        let data = {
          userName: userName,
          passWord: password
        }
        dispatch(requestApi(POST, BASE_URL + '/account', data)).then(result => {
          console.log(result.data.success);
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
              dispatch(signInFail('Sai tên hoặc mật khẩu'));
              break;
            }
            default: dispatch(signInFail('Something went wrong, try again'))
          }
        });
        break;
      }
      case FACEBOOK_SIGN_IN: {
        if (accessToken) {
          let data = {
            access_token: accessToken
          }
          dispatch(requestApi(POST, BASE_URL + '/account_facebook', data)).then(result => {
            if (result.data.success) {
              //set token
              dispatch(signInSuccess(result.data.value.access_token));
              //get profile
              dispatch(getUserProfile());
            }
            else dispatch(signInFail('Something went wrong, try again'));
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
          })
        } else dispatch(signInFail('Access token from FB is in valid'))
        break;
      }
      case GOOGLE_SIGN_IN: {
        if (accessToken) {
          let data = {
            access_token: accessToken
          }
          dispatch(requestApi(POST, BASE_URL + '/account_google', data)).then(result => {
            if (result.data.success) {
              //set token
              dispatch(signInSuccess(result.data.value.access_token));
              //get profile
              dispatch(getUserProfile());
            }
            else dispatch(signInFail('Something went wrong, try again'));
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
          })
        } else dispatch(signInFail('Access token from GG is in valid'))
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
  return ({
    type: SIGN_UP_FAIL,
    errMessage: errMessage
  })
}

export const signUp = function (data, method = NORMAL_SIGN_UP) {
  return (dispatch) => {
    switch (method) {
      case NORMAL_SIGN_UP: {
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
        break;
      }
      case FACEBOOK_SIGN_OUT: {
        window.FB.logout();
        dispatch(signOutSuccess());
        break;
      }
      case GOOGLE_SIGN_OUT:
        {
          let auth2 = window.gapi.auth2.getAuthInstance();
          auth2.signOut().then(() => {
            dispatch(signOutSuccess());
          })
          break;
        }
      default: throw new Error('Unknown sign out method');
    }
  }
}

//USER PROFILE
export const receiveProfile = function (profile) {
  return {
    type: RECEIVE_PROFILE,
    profile: profile
  }
}

export const getUserProfile = function () {
  return (dispatch) => {
    dispatch(requestApi(GET, BASE_URL + '/account/profile')).then(result => {
      console.log(result)
      if (result.data.success) dispatch(receiveProfile(result.data.profile));
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

export const updateUserProfile = function (profile) {
  return (dispatch) => {
    dispatch(requestApi(POST, BASE_URL + '/account/profile', profile)).then(result => {
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