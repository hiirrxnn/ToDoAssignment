import { combineReducers } from 'redux';
import authReducer from './authReducer';
import taskReducer from './taskReducer';
import weatherReducer from './weatherReducer';

export default combineReducers({
  auth: authReducer,
  tasks: taskReducer,
  weather: weatherReducer
});