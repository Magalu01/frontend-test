import { TYPES } from '../types/Heroes';
import { INITIAL_STATE } from '../states/Heroes';

const { Heroes, Favorites, GetHeroById, Comics } = TYPES;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Heroes:
      return { ...state, heroes: action.payload };
    case Favorites:
      return { ...state, favorites: action.payload };
    case GetHeroById:
      return { ...state, hero: action.payload };
    case Comics:
      return { ...state, comicsBy: action.payload };
    default:
      return state;
  }
};
