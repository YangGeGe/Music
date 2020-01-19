import { put, takeEvery } from 'redux-saga/effects';
import {
  CURRENT_TIME_SETTER,
  CURRENT_TIME,
} from '../actions/actionTypes';


function* setCurrentTime(action) {
  try {
    const currentTime = action.payload;
    yield put({ type: CURRENT_TIME_SETTER, payload: { currentTime } });
  } catch (e) {
    console.log(e);
  }
}


function* audioSaga() {
  yield takeEvery(CURRENT_TIME, setCurrentTime);
}

export default audioSaga;
