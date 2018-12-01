import { RECEIVE_EXERCISE_LIST, RECEIVE_EXERCISE, CHANGE_USER_ANSWER_IN_EXERCISE } from "../actions/actionTypes";
import { CHOICE, FILL } from "../constants";

const initialState = {
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
  },
  {
    _id: '12347',
    type: FILL,
    content: "{\"ops\":[{\"insert\":\"\u0110i\u1EC1n v\u00E0o ch\u1ED7 tr\u1ED1ng: 1 + 1 = ...\\n\"}]}",
    userAnswer: ''
  }],
  currentExerciseIndex: 1
}

export default function (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_EXERCISE_LIST:
      return {
        ...state,
        currentExerciseList: action.exerciseList
      }
    case RECEIVE_EXERCISE:
      return {
        ...state,
        currentExercise: action.exercise
      }
    case CHANGE_USER_ANSWER_IN_EXERCISE: {
      //change userAnswer at current exercise
      let changedList = state.currentExerciseList.map((item, index) => {
        if (index === state.currentExerciseIndex) {
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
    default: return state;
  }
}