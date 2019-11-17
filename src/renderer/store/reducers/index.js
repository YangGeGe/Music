import { ADD } from '../actions/actionTypes';

const initState = {
  num: 1,
};

function reducer(state = initState, action) {
  let newState;
  switch (action.type) {
    case ADD:
      state.num += 1;
      newState = { ...state };
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}
export default reducer;
