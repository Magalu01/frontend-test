import { combineReducers } from 'redux';
import heroes from './Heroes';

const reducers = combineReducers({
  heroes,
});

export default (state, action) => reducers(state, action);
