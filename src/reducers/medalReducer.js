import { RECEIVE_MEDAL_LIST } from "../actions/actionTypes";

const initialState = {
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case RECEIVE_MEDAL_LIST: {
      return {
        ...state,
        list: action.medalList
      }
    }

    default:
      return state
  }
}
