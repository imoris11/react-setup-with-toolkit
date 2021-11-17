import authReducerSlice from '@auth/reducer';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
  auth: authReducerSlice,
});

export default rootReducers;
