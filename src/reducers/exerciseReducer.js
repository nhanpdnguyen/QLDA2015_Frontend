import { RECEIVE_EXERCISE_LIST, CHANGE_USER_ANSWER_IN_EXERCISE, GO_TO_NEXT_QUESTION } from "../actions/actionTypes";
import { CHOICE, FILL } from "../constants";

const initialState = {
  session: '',
  topicId: '',
  topicName: '',
  currentExerciseList: [{
    _id: '12345',
    type: CHOICE,
    content: "{\"ops\":[{\"insert\":\"B\u1EA1n T\u00F9ng c\u00F3 \u0111\u1EB9p trai hay kh\u00F4ng? \u0110i\u1EC1u g\u00EC \u0111\u00E3 khi\u1EBFn cho b\u1EA1n T\u00F9ng \u0111\u1EB9p trai nh\u01B0 v\u1EADy?\"},{\"insert\":\"\\n\"}]}",
    answers: {
      ansA: "câu 1",
      ansB: "câu 2",
      ansC: "câu 3",
      ansD: "câu 4",
    },
    userAnswer: ''
  },
  {
    _id: '12347',
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
  currentQuestionIndex: 0,
  answerTryCount: 0, //number of answer tries in 1 question
  modal: {
    isOpen: false,
    content: 'This is a modal content$$sdfsf',
    buttonContent: 'Tiếp tục'
  },
  error: {
    hasNotAnswer: false
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_EXERCISE_LIST:
      return {
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
        currentExerciseList: changedList
      }
    }

    case GO_TO_NEXT_QUESTION: {
      let newQuestionIndex = state.currentQuestionIndex;
      return {
        ...state,
        currentQuestionIndex: ++newQuestionIndex
      }
    }
    default: return state;
  }
}