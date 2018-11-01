import auth from "./authReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({ auth });
export default rootReducer;