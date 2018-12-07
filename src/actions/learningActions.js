import {
  RECEIVE_LESSON, RECEIVE_LESSON_LIST
} from './actionTypes';

import {
  GET
} from "../constants";

import config from '../config';
import { requestApi, requestFail } from './requestActions';

const LEARNING_API_BASE_URL = config.LEARNING_API_BASE_URL;

//LEARNING
export const getLessonListByCategory = function (categoryId) {
  return (dispatch) => {
    dispatch(requestApi(GET, LEARNING_API_BASE_URL + '/categories/' + categoryId)).then(result => {
      if (result.data.success) dispatch(receiveLessonList(result.data.value));
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

export const receiveLessonList = function (lessonList) {
  return {
    type: RECEIVE_LESSON_LIST,
    lessonList
  }
}

export const getLessonById = function (lessonId) {
  return (dispatch) => {
    dispatch(requestApi(GET, LEARNING_API_BASE_URL + '/lessons/' + lessonId)).then(result => {
      if (result.data.success) dispatch(receiveLesson(result.data.value));
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

export const receiveLesson = function (lesson) {
  return {
    type: RECEIVE_LESSON,
    lesson
  }
}