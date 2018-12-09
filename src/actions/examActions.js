import { CHANGE_USER_ANSWER_IN_EXAM } from "./actionTypes";

export const changeUserAnswerInExam = (data, index) => ({
  type: CHANGE_USER_ANSWER_IN_EXAM,
  data,
  index
})
