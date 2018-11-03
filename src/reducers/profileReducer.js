import { SIGN_IN_SUCCESS } from "../actions/actionTypes";

let initalState = {
  userId: null,
  userName: null,
  pointReward: 0,
  firstName: null,
  lastName: null,
  region: null,
  school: null,
  capacity: null,
  firstNameParent: null,
  lastNameParent: null,
  emailParent: null,
  phoneParent: null,
  regionParent: null
}

export default function (state = initalState, action) {
  switch (action.type) {

    default: return state
  }
}