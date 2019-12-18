import { call, put, takeLatest } from 'redux-saga/effects';
import {
  SETTER,
  LOGIN,
} from '../actions/actionTypes';
import {
  loginRequest,
} from '../../request/service/user';

function* login(action) {
  try {
    const user = yield call(loginRequest, action.payload);
    yield put({ type: SETTER, payload: user });
  } catch (e) {
    console.log(e);
  }
}


function* userSaga() {
  yield takeLatest(LOGIN, login);
}

export default userSaga;
