import { SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS, SIGN_UP_SUCCESS } from "../actions/actionTypes";

let initialState = {
  isLoggedIn: false
}
export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_SUCCESS: {
      console.log('sign in successfully');
      state = {...state, isLoggedIn: true}
      return state;
      break;
    }
    case SIGN_OUT_SUCCESS: {
      console.log('sign out successfully');
      break;
    }
    case SIGN_UP_SUCCESS: {
      console.log('sign up successfully');
      break;
    }
    default: return state;
  }

}