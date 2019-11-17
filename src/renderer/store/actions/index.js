import { ADD } from './actionTypes';

const actions = {
  add(payload) {
    return { type: ADD, payload };
  },
};

export default actions;
