import { combineReducers } from 'redux';
import userReducer from './user';
import musicLibraryReducer from './musicLibrary';
import audioReducer from './audio';

const reducer = combineReducers({
  user: userReducer,
  musicLibrary: musicLibraryReducer,
  audio: audioReducer,
});

export default reducer;
