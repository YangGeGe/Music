import {
  CURRENT_TIME_SETTER,
} from '../actions/actionTypes';

const initState = {
  currentTime: 0,
};

function audioReducer(state = initState, action) {
  switch (action.type) {
    case CURRENT_TIME_SETTER:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
}

export default audioReducer;
