import { RECEIVE_PROFILE } from "../actions/actionTypes";

let initalState = {
  userId: '',
  userName: '',
  pointReward: 0,
  firstName: '',
  lastName: '',
  region: '',
  school: '',
  capacity: '',
  firstNameParent: '',
  lastNameParent: '',
  emailParent: '',
  phoneParent: '',
  regionParent: ''
}

export default function (state = initalState, action) {
  //console.log(action.profile)
  switch (action.type) {
    case RECEIVE_PROFILE: {
      return action.profile
    }
    default: return state
  }
}