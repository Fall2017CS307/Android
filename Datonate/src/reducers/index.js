import { combineReducers } from 'redux';
import AuthReducers from './AuthReducers';
import ExperimentReducers from './ExperimentReducers';

export default combineReducers({
  auth: AuthReducers,
  exp: ExperimentReducers
});
