import axios from 'axios';
import {ADD_EMPLOYEE,DELETE_EMPLOYEE,GET_ERRORS,GET_EMPLOYEE} from './types';

export const add_employe=(emp)=>dispatch=>{
  axios.post("http://dummy.restapiexample.com/api/v1/create",emp)
  .then(res=>{
    console.log(res);
    dispatch({
      type:ADD_EMPLOYEE,
      payload:res.data
    })
  })
  .catch(error=>{
    dispatch({
      type:GET_ERRORS,
      playload:error.data
    })
  })

}
export const get_employee=()=>dispatch=>{
  axios.get("http://dummy.restapiexample.com/api/v1/employees")
  .then(res=>{
    console.log(res);
    dispatch({
      type:GET_EMPLOYEE,
      payload:res.data
    })
  })
  .catch(error=>{
    dispatch({
      type:GET_ERRORS,
      playload:error.data
    })
  })

}
