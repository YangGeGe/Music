import { LOGIN } from './actionTypes';

const userActions = {
  login(payload) {
    return { type: LOGIN, payload };
  },
};

export default userActions;
