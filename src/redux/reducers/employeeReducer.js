import {ADD_EMPLOYEE,DELETE_EMPLOYEE,GET_ERRORS,GET_EMPLOYEE} from '../actions/types';
const initialState={
  employees:{},
  empSave:{}
}
export default function(state=initialState, action){
  switch (action.type) {
    case ADD_EMPLOYEE:
    return {
      ...state,
      empSave:action.payload
    };

      break;
    case GET_EMPLOYEE:
    return {
      ...state,
      employees:action.payload
    };

      break;
    case GET_ERRORS:
    return {
      ...state,
      employees:{}
    };

      break;
    default:
    return  state;

  }
}
