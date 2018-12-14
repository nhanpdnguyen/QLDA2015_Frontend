import {
  CHANGE_USER_ANSWER_IN_EXERCISE, RECEIVE_EXERCISE_LIST, GO_TO_NEXT_QUESTION, CLOSE_EXERCISE_MODAL, NO_USER_ANSWER_FOUND_IN_EXCERCISE, OPEN_EXERCISE_MODAL, USER_HAD_CORRECT_ANSWER, RECEIVE_TOPIC_NAME, RECEIVE_EXERCISE_RESULT, CLEAR_EXERCISE_RESULT
} from './actionTypes';

import config from '../config';
import { requestApi, requestFail } from './requestActions';
import { GET, POST } from '../constants';

const EXERCISE_API_BASE_URL = config.EXERCISE_API_BASE_URL;
const LEARNING_API_BASE_URL = config.LEARNING_API_BASE_URL;

//EXERCISE 
export const getTopicName = function (topicId) {
  return (dispatch) => {
    dispatch(requestApi(GET, LEARNING_API_BASE_URL + '/topics/' + topicId)).then(result => {
      if (result.data.success) dispatch(receiveTopicName(result.data.value));
      else dispatch(requestFail('Xảy ra lỗi, vui lòng tải lại trang'));
    }, err => {
      console.log(err.response)
      let status = err.response && err.response.status;
      switch (status) {
        case 401: {
          dispatch(requestFail('Not authorized'));
          break;
        }
        default: dispatch(requestFail('Xảy ra lỗi, vui lòng tải lại trang'))
      }
    })
  }
}

export const receiveTopicName = function (data) {
  return {
    type: RECEIVE_TOPIC_NAME,
    topicName: data.name
  }
}

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
      else dispatch(requestFail('Xảy ra lỗi, vui lòng tải lại trang'));
    }, err => {
      console.log(err.response)
      let status = err.response && err.response.status;
      switch (status) {
        case 401: {
          dispatch(requestFail('Not authorized'));
          break;
        }
        default: dispatch(requestFail('Xảy ra lỗi, vui lòng tải lại trang'))
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

export const noUserAnswerFound = function () {
  return {
    type: NO_USER_ANSWER_FOUND_IN_EXCERCISE
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

    //if user has not answered yet, display error
    if (!data.answer) return dispatch(noUserAnswerFound());

    dispatch(requestApi(POST, EXERCISE_API_BASE_URL + `/answer/${state.session}/${questionId}`, data)).then(result => {
      dispatch(receiveAnswerInExercise(result.data));
    }, err => {
      console.log(err.response)
      let status = err.response && err.response.status;
      switch (status) {
        case 401: {
          dispatch(requestFail('Not authorized'));
          break;
        }
        default: dispatch(requestFail('Xảy ra lỗi, vui lòng tải lại trang'))
      }
    })
  }
}

export const receiveAnswerInExercise = function (data) {
  return (dispatch, getState) => {
    let { result, record } = data;
    dispatch(userHadCorrectAnswer(result));

    const state = getState();
    const { answerTryCount, currentExerciseList, currentQuestionIndex } = state.exercise;

    record = [record].map((record) => {
      let recordLabel = record.slice(3);
      //special case: answer incorrectly 2 times
      if (['A', 'B', 'C', 'D'].includes(recordLabel)) {
        return recordLabel + '. ' +
          currentExerciseList[currentQuestionIndex].answers[record];
      }
      return record
    })

    //open modal with the right content
    let modalData = {};
    switch (result) {
      case true:
        modalData.buttonContent = 'Đã hiểu';
        modalData.content = `Chúc mừng bạn đã trả lời đúng$$Giải thích: ${record}$$Nhấn nút "Đã hiểu" để tiếp tục`;
        break;
      case false:
        if (answerTryCount === 1) {
          modalData.buttonContent = 'Tiếp tục';
          modalData.content = `Câu trả lời chưa đúng, bạn được chọn lại 1 lần nữa$$Gợi ý: ${record}`
        }
        else if (answerTryCount === 2) {
          modalData.buttonContent = 'Đã hiểu';
          modalData.content = `Câu trả lời đúng của câu hỏi này là: ${record}$$Nhấn nút "Đã hiểu"để tiếp tục`;
        }
        break;
      default: return dispatch(requestFail('Unknown error'))
    }
    dispatch(openExerciseModal(modalData));
  }
}

export const userHadCorrectAnswer = function (data = false) {
  return {
    type: USER_HAD_CORRECT_ANSWER,
    data
  }
}

export const openExerciseModal = function (modalData) {
  return {
    type: OPEN_EXERCISE_MODAL,
    modalData: modalData
  }
}

export const closeExerciseModal = function () {
  return {
    type: CLOSE_EXERCISE_MODAL
  }
}

export const goToNextQuestionIfPossible = function () {
  return (dispatch, getState) => {
    let state = getState().exercise;
    //the end of question list
    if ((state.currentExerciseList.length - 1) === state.currentQuestionIndex) return dispatch(getExerciseResult());

    if ((state.userHadCorrectAnswer && state.answerTryCount === 1) ||
      (state.answerTryCount === 2)) return dispatch(goToNextQuestion());
  }
}

export const goToNextQuestion = function () {
  return {
    type: GO_TO_NEXT_QUESTION
  }
}

export const getExerciseResult = function () {
  return (dispatch, getState) => {
    let state = getState().exercise;
    dispatch(requestApi(GET, EXERCISE_API_BASE_URL + `/result_exercise/${state.session}`)).then(result => {
      dispatch(receiveExerciseResult(result.data));
    }, err => {
      console.log(err.response)
      let status = err.response && err.response.status;
      switch (status) {
        case 401: {
          dispatch(requestFail('Not authorized'));
          break;
        }
        default: dispatch(requestFail('Xảy ra lỗi, vui lòng tải lại trang'))
      }
    })
  }
}

export const receiveExerciseResult = function (exerciseResult) {
  return {
    type: RECEIVE_EXERCISE_RESULT,
    exerciseResult
  }
}

export const clearExerciseResult = function () {
  return {
    type: CLEAR_EXERCISE_RESULT
  }
}