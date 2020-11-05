import { TYPES } from '../types/Heroes';
import { INITIAL_STATE } from '../states/Heroes';

const { Heroes, Favorites } = TYPES;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Heroes:
      return { ...state, heroes: action.payload };
    case Favorites:
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
};
