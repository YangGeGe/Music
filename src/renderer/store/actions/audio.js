import { CURRENT_TIME } from './actionTypes';

const audioActions = {
  setCurrentTime(payload) {
    return { type: CURRENT_TIME, payload };
  },
};

export default audioActions;
