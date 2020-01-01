import {
  USER_SETTER,
} from '../actions/actionTypes';

const initState = {
  user: {},
};

function userReducer(state = initState, action) {
  switch (action.type) {
    case USER_SETTER:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
}
export default userReducer;
