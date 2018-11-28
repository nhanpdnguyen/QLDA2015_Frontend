import { RECEIVE_EXERCISE_LIST, RECEIVE_EXERCISE } from "../actions/actionTypes";
import { CHOICE } from "../constants";

const initialState = {
  currentExerciseList: null,
  currentExercise: {
    _id: '12345',
    type: CHOICE,
    content: "{\"ops\":[{\"attributes\":{\"background\":\"#ffffff\",\"color\":\"#212529\"},\"insert\":\"B\u1EA1n T\u00F9ng c\u00F3 \u0111\u1EB9p trai hay kh\u00F4ng? \u0110i\u1EC1u g\u00EC \u0111\u00E3 khi\u1EBFn cho b\u1EA1n T\u00F9ng \u0111\u1EB9p trai nh\u01B0 v\u1EADy?\"},{\"insert\":\"\\n\"}]}",
    answers: {
      ansA: "câu 1",
      ansB: "câu 2",
      ansC: "câu 3",
      ansD: "câu 4",
    },
    userAnswer: ''
  }
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
    default: return state;
  }
}