import { combineReducers } from 'redux';
import home from './Home';

const reducers = combineReducers({
  home,
});

export default (state, action) => reducers(state, action);
