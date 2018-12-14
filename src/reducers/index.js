import auth from "./authReducer";
import profile from './profileReducer';
import learning from './learningReducer';
import exercise from './exerciseReducer';
import leaderBoard from './leaderBoardReducer';
import { combineReducers } from "redux";
import { REQUESTING } from "../actions/actionTypes";
import exam from './examReducer';
import messageReducer from './messageReducer.js'
import messageTeacherReducer from './messageTeacherReducer.js';
import medal from './medalReducer';

const isRequesting = function (state = false, action) {
  switch (action.type) {
    case REQUESTING: {
      return true;
    }
    default: return false;
  }
}

const rootReducer = combineReducers({ isRequesting, auth, profile, learning, exercise, exam, messageReducer, messageTeacherReducer, leaderBoard, medal});
export default rootReducer;
