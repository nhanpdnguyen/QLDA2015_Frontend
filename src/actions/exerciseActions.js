import {
  CHANGE_USER_ANSWER_IN_EXERCISE, RECEIVE_EXERCISE_LIST, GO_TO_NEXT_QUESTION
} from './actionTypes';

import config from '../config';
import { requestApi, requestFail } from './requestActions';
import { GET, POST } from '../constants';

const EXERCISE_API_BASE_URL = config.EXERCISE_API_BASE_URL;

//EXERCISE 
export const changeUserAnswerInExercise = function (userAnswer) {
  return {
    type: CHANGE_USER_ANSWER_IN_EXERCISE,
    userAnswer
  }
}

export const getExerciseListByTopicId = function (topicId) {
  return (dispatch) => {
    dispatch(requestApi(GET, EXERCISE_API_BASE_URL + `/topic/${topicId}/number_question?numberQuestion=10`)).then(result => {
      if (result.data) dispatch(receiveExerciseList(result.data));
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

export const receiveExerciseList = function (data) {
  return {
    type: RECEIVE_EXERCISE_LIST,
    data
  }
}

export const answerExerciseQuestion = function () {
  return (dispatch, getState) => {
    let state = getState().exercise;
    let currentExercise = state.currentExerciseList[state.currentQuestionIndex];
    let questionId = currentExercise._id;
    let data = {
      typeQuestion: currentExercise.type,
      answer: currentExercise.userAnswer
    }
    dispatch(requestApi(POST, EXERCISE_API_BASE_URL + `/answer/${state.session}/${questionId}`, data)).then(result => {

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

export const goToNextQuestionIfPossible = function () {
  return (dispatch, getState) => {
    let state = getState().exercise;
    //the end of question list
    if ((state.currentExerciseList.length - 1) === state.currentQuestionIndex) dispatch(getExerciseResult());
    else dispatch(goToNextQuestion());
  }
}

export const goToNextQuestion = function () {
  return {
    type: GO_TO_NEXT_QUESTION
  }
}

export const getExerciseResult = function () {
  return {

  }
}