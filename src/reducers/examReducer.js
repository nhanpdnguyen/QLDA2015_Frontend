import { FILL, CHOICE } from "../constants";
import { CHANGE_USER_ANSWER_IN_EXAM } from "../actions/actionTypes";

const initialState = {
  currentExamList: [{
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
  }],
  result: {

  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER_ANSWER_IN_EXAM: {
      let changedList = state.currentExamList.map((item, index) => {
        if (index === action.index) {
          return {
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
    default:
      return state
  }
}
