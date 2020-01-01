import { all } from 'redux-saga/effects';
import userSaga from './user';
import musicLibrarySaga from './musicLibrary';

export default function* rootSaga() {
  yield all([
    userSaga(),
    musicLibrarySaga(),
  ]);
}
