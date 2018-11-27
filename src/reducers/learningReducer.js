import { RECEIVE_LESSON_LIST, RECEIVE_LESSON } from "../actions/actionTypes";

const initialState = {
  currentLessonList: null,
  currentLesson: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_LESSON_LIST:
      return {
        ...state,
        currentLessonList: action.lessonList
      }
    case RECEIVE_LESSON:
      return {
        ...state,
        currentLesson: action.lesson
      }
    default: return state;
  }
}