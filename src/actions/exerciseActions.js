import {
  CHANGE_USER_ANSWER_IN_EXERCISE
} from './actionTypes';

import {
} from "../constants";


//EXERCISE 
export const changeUserAnswerInExercise = function (userAnswer) {
  return {
    type: CHANGE_USER_ANSWER_IN_EXERCISE,
    userAnswer
  }
}