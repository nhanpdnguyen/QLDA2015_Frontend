import { RECEIVE_LEADER_BOARD } from "../actions/actionTypes";

const initialState = {
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case RECEIVE_LEADER_BOARD:
      return {
        ...state,
        list: action.list
      }

    default:
      return state
  }
}
