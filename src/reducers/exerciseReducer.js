import { RECEIVE_EXERCISE_LIST, CHANGE_USER_ANSWER_IN_EXERCISE, GO_TO_NEXT_QUESTION, CLOSE_EXERCISE_MODAL, NO_USER_ANSWER_FOUND_IN_EXCERCISE, OPEN_EXERCISE_MODAL, USER_HAD_CORRECT_ANSWER, RECEIVE_TOPIC_NAME, RECEIVE_EXERCISE_RESULT, CLEAR_EXERCISE_RESULT } from "../actions/actionTypes";

const initialResult = {
  numberQuestion: 0,
  numberAnswerRight: 0,
  point: 0
}

const initialState = {
  session: '',
  topicId: '',
  topicName: '',
  currentExerciseList: [{}],
  currentQuestionIndex: 0,
  answerTryCount: 0, //number of answer tries in 1 question
  userHadCorrectAnswer: false,
  modal: {
    isOpen: false,
    content: '',
    buttonContent: 'Tiếp tục'
  },
  error: {
    hasNotAnswer: false
  },
  result: initialResult
}

export default function (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_TOPIC_NAME: {
      return {
        ...state,
        topicName: action.topicName
      }
    }
    case RECEIVE_EXERCISE_LIST:
      return {
        ...state,
        session: action.data.session,
        currentExerciseList: action.data.listQuestion,
        currentQuestionIndex: 0
      }

    case CHANGE_USER_ANSWER_IN_EXERCISE: {
      //change userAnswer at current exercise
      let changedList = state.currentExerciseList.map((item, index) => {
        if (index === state.currentQuestionIndex) {
          return {
            ...item,
            userAnswer: action.userAnswer
          }
        }
        else return item;
      })

      return {
        ...state,
        currentExerciseList: changedList,
        error: {
          ...state.error,
          hasNotAnswer: false
        }
      }
    }

    case NO_USER_ANSWER_FOUND_IN_EXCERCISE: {
      return {
        ...state,
        error: {
          ...state.error,
          hasNotAnswer: true
        }
      }
    }

    case USER_HAD_CORRECT_ANSWER: {
      return {
        ...state,
        answerTryCount: ++state.answerTryCount,
        userHadCorrectAnswer: action.data
      }
    }

    case OPEN_EXERCISE_MODAL: {
      return {
        ...state,
        modal: {
          ...action.modalData,
          isOpen: true
        }
      }
    }

    case CLOSE_EXERCISE_MODAL: {
      return {
        ...state,
        modal: {
          ...state.modal,
          isOpen: false
        }
      }
    }

    case GO_TO_NEXT_QUESTION: {
      let newQuestionIndex = state.currentQuestionIndex;
      return {
        ...state,
        currentQuestionIndex: ++newQuestionIndex,
        //reset the try times and userHadCorrectAnswer
        answerTryCount: 0,
        userHadCorrectAnswer: false
      }
    }

    case RECEIVE_EXERCISE_RESULT: {
      return {
        ...state,
        result: action.exerciseResult
      }
    }

    case CLEAR_EXERCISE_RESULT: {
      return {
        ...state,
        result: initialResult
      }
    }

    default: return state;
  }
}