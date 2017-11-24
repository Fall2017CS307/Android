import { combineReducers } from 'redux';
import AuthReducers from './AuthReducers';
import ExperimentReducers from './ExperimentReducers';
import TaskReducers from './TaskReducers';
import UserTasksReducers from './UserTasksReducers';

export default combineReducers({
  auth: AuthReducers,
  exp: ExperimentReducers,
  tasks: TaskReducers,
  userTasks: UserTasksReducers
});
