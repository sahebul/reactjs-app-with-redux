

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import employeeReducer from './employeeReducer';
export default combineReducers({
  router: routerReducer,
  emp: employeeReducer,
});
