import { RECEIVE_EXERCISE_LIST, CHANGE_USER_ANSWER_IN_EXERCISE, GO_TO_NEXT_QUESTION, CLOSE_EXERCISE_MODAL, NO_USER_ANSWER_FOUND_IN_EXCERCISE, OPEN_EXERCISE_MODAL, USER_HAD_CORRECT_ANSWER, RECEIVE_TOPIC_NAME, RECEIVE_EXERCISE_RESULT } from "../actions/actionTypes";
import { CHOICE, FILL } from "../constants";

const initialState = {
  session: '1bcda851782b3a529412defc77f8391fd2bc22d21414a05b33bcb93c2fb4fce9',
  topicId: '5bdddd7f64a36a814098a5a2',
  topicName: 'Phân số và Số thập phân',
  currentExerciseList: [{
    _id: '5bed57a317a7bc29788fe9d0',
    type: CHOICE,
    content: "{\"ops\":[{\"insert\":\"B\u1EA1n T\u00F9ng c\u00F3 \u0111\u1EB9p trai hay kh\u00F4ng? \u0110i\u1EC1u g\u00EC \u0111\u00E3 khi\u1EBFn cho b\u1EA1n T\u00F9ng \u0111\u1EB9p trai nh\u01B0 v\u1EADy?\"},{\"insert\":\"\\n\"}]}",
    answers: {
      ansA: "10",
      ansB: "11",
      ansC: "8",
      ansD: "9",
    },
    userAnswer: ''
  },
  {
    _id: '5bed588a17a7bc29788fe9d8',
    type: FILL,
    content: "{\"ops\":[{\"insert\":\"\u0110i\u1EC1n v\u00E0o ch\u1ED7 tr\u1ED1ng: 1 + 1 = ...\\n\"}]}",
    userAnswer: ''
  },
  {
    _id: '12346',
    type: CHOICE,
    content: "{\"ops\":[{\"insert\":\"B\u1EA1n T\u00F9ng c\u00F3 \u0111\u1EB9p trai hay kh\u00F4ng? \u0110i\u1EC1u g\u00EC \u0111\u00E3 khi\u1EBFn cho b\u1EA1n T\u00F9ng \u0111\u1EB9p trai nh\u01B0 v\u1EADy?\"},{\"insert\":\"\\n\"}]}",
    answers: {
      ansA: "câu A",
      ansB: "câu B",
      ansC: "câu C",
      ansD: "câu D",
    },
    userAnswer: ''
  }],
  currentQuestionIndex: 1,
  answerTryCount: 0, //number of answer tries in 1 question
  userHadCorrectAnswer: false,
  modal: {
    isOpen: false,
    content: 'This is a modal content$$sdfsf',
    buttonContent: 'Tiếp tục'
  },
  error: {
    hasNotAnswer: false
  },
  result: {

  }
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
        currentExerciseList: action.data.listQuestions,
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

    default: return state;
  }
}