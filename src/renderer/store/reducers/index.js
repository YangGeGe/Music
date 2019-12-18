import {
  SETTER,
} from '../actions/actionTypes';

const initState = {
  user: {},
};

function reducer(state = initState, action) {
  switch (action.type) {
    case SETTER:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
}
export default reducer;
