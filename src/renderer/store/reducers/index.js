import { combineReducers } from 'redux';
import userReducer from './user';
import musicLibraryReducer from './musicLibrary';

const reducer = combineReducers({
  user: userReducer,
  musicLibrary: musicLibraryReducer,
});

export default reducer;
