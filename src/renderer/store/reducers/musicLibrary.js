import {
  MUSIC_LIBRARY_SETTER,
} from '../actions/actionTypes';

const initState = {
  bannerList: [],
};

function musicLibraryReducer(state = initState, action) {
  switch (action.type) {
    case MUSIC_LIBRARY_SETTER:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
}

export default musicLibraryReducer;
