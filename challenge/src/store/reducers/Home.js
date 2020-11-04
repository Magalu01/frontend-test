import { TYPES } from '../types/Home';
import { INITIAL_STATE } from '../states/Home';

const { HOME } = TYPES;

export default (state = INITIAL_STATE.home, action) => {
  switch (action.type) {
    case HOME:
      return { ...state, home: action.payload };
    default:
      return state;
  }
};
