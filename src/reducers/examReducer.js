import { FILL, CHOICE } from "../constants";
import { CHANGE_USER_ANSWER_IN_EXAM, RECEIVE_EXAMINATION_LIST, RECEIVE_EXAMINATION_TITLE_LIST,SAVE_EXAM_INFO, RECEIVE_EXAM_RESULT, CLEAR_EXAM_RESULT, SET_EXAM_TIMER, CLEAR_CURRENT_EXAM_LIST } from "../actions/actionTypes";

const initialResult = {
  numberQuestion: 0,
  numberAnswerRight: 0,
  point: 0
}

const initialState = {
  currentExamList: [],
  result: {
  },
  examTitleList: [],
  examInfo: {
    title: '',
    type: '',
    time: '',
    timeDo: 0,
    numberQuestion: 0
  },
  result: initialResult,
  timer: 0,

}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER_ANSWER_IN_EXAM: {
      let changedList = state.currentExamList.map((item, index) => {
        if (index === action.index) { 
          return {
            ...state,
            ...item,
            userAnswer: action.data
          }
        } else return item;
      });
      
      return {
        ...state,
        currentExamList: changedList
      }
    }
    case RECEIVE_EXAMINATION_LIST: {
      var examList = action.data.map(exam => {
        return {
          ...exam,
          userAnswer: ''
        }
      })
      return {
        ...state,
        currentExamList: examList,
      }
    }
    case RECEIVE_EXAMINATION_TITLE_LIST: {
      return {
        ...state,
        examTitleList: action.data
      }
    }
    case SAVE_EXAM_INFO: {
      return {
        ...state,
        examInfo: action.data,
        timer: action.data.timeDo
      }
    }
    case RECEIVE_EXAM_RESULT: {
      return {
        ...state,
        result: action.examResult
      }
    }
    case CLEAR_EXAM_RESULT: {
      return {
        ...state,
        result: initialResult
      }
    }
    case SET_EXAM_TIMER: {
      console.log("SET_EXAM_TIMER ", action.time);
      return {
        ...state,
        timer: action.time,
      }
    }
    case CLEAR_CURRENT_EXAM_LIST: {
      return {
        ...state,
        currentExamList: []
      }
    }
    default:
      return state
  }
}
