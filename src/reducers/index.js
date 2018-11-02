import auth from "./authReducer";
import { combineReducers } from "redux";
import { REQUESTING } from "../actions/actionTypes";

const isRequesting = function (state = false, action) {
  switch (action.type) {
    case REQUESTING: {
      return true;
    }
    default: return false;
  }
}

const rootReducer = combineReducers({ isRequesting, auth });
export default rootReducer;