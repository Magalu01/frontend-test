import { TYPES } from '../types/Heroes';
import { INITIAL_STATE } from '../states/Heroes';

const { Heroes } = TYPES;

export default (state = INITIAL_STATE.heroes, action) => {
  switch (action.type) {
    case Heroes:
      return { ...state, heroes: action.payload };
    default:
      return state;
  }
};
