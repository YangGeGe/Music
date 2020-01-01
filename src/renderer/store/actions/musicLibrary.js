import { REQEST_BANNER } from './actionTypes';

const musicLibraryActions = {
  getBannerList(payload) {
    return { type: REQEST_BANNER, payload };
  },
};

export default musicLibraryActions;
