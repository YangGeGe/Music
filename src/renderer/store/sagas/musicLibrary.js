import { call, put, takeLatest } from 'redux-saga/effects';
import {
  MUSIC_LIBRARY_SETTER,
  REQEST_BANNER,
} from '../actions/actionTypes';
import {
  getBannerListRequest,
} from '../../request/service/musicLibrary';

function* getBannerList(action) {
  try {
    const bannerList = yield call(getBannerListRequest, action.payload);
    yield put({ type: MUSIC_LIBRARY_SETTER, payload: { bannerList } });
  } catch (e) {
    console.log(e);
  }
}


function* musicLibrarySaga() {
  yield takeLatest(REQEST_BANNER, getBannerList);
}

export default musicLibrarySaga;
