import { combineReducers } from 'redux';
import UserReducer from './user';
import ActiveUserReducer from './active'

const allReducers = combineReducers({
  users: UserReducer,
  activeuser: ActiveUserReducer
});

export default allReducers;