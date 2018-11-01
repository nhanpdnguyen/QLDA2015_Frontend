import { SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS, SIGN_UP_SUCCESS, SIGN_IN_FAIL, SIGN_UP_FAIL } from "../actions/actionTypes";

let initialState = {
  isLoggedIn: false,
  accessToken: null
}
export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_SUCCESS: {
      console.log('reducer: sign in successfully');
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
    case SIGN_OUT_SUCCESS: {
      console.log('sign out successfully');
      return state;
    }
    case SIGN_UP_SUCCESS: {
      console.log('reducer: sign up successfully');
      console.log('accessToken: ', action.accessToken);
      state = {
        ...state,
        isLoggedIn: true,
        accessToken: action.accessToken
      }
      return state;
    }
    case SIGN_UP_FAIL: {
      console.log('reducer: sign up fail ' + action.errMessage);
      return state;
    }
    default: return state;
  }
}