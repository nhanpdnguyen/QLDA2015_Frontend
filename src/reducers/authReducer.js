import { SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS, SIGN_UP_SUCCESS, SIGN_IN_FAIL, SIGN_UP_FAIL } from "../actions/actionTypes";
import { SET_SIGNUP_FALSE, RESET_PROFILE } from "../constants";

let initialState = {
  isLoggedIn: false,
  accessToken: null,
  isSignUp: false,
}
export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_SUCCESS: {
      console.log('accessToken: ', action.accessToken);
      state = {
        ...state,
        isLoggedIn: true,
        accessToken: action.accessToken
      }
      return state;
    }
    case SIGN_IN_FAIL: {
      console.log('reducer: sign in fail ' + action.errMessage);
      return state;
    }
    case SIGN_UP_SUCCESS: {
      console.log('reducer: sign up successfully');
      console.log('accessToken: ', action.accessToken);
      state = {
        ...state,
        isLoggedIn: true,
        accessToken: action.accessToken,
        isSignUp: true
      }
      return state;
    }
    case SIGN_UP_FAIL: {
      console.log('reducer: sign up fail ' + action.errMessage);
      return state;
    }
    case SIGN_OUT_SUCCESS: {
      console.log('reducer: sign out success');
      state = {
        ...state,
        isLoggedIn: false,
        accessToken: null
      }
      return state;
    }
    case SET_SIGNUP_FALSE: {
      return {
        ...state,
        isSignUp: action.payload.isSignUp
      }
    }
    default: return state;
  }
}
