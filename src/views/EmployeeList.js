import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {get_employee} from '../redux/actions/employee';
class EmployeeList extends Component {
  constructor() {
super()
  }
  state ={
    name:'',
    salary:'',
    age:'',
    emp:[]
  };
  handleInputChange = e =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  handleSubmit = e =>{
    e.preventDefault();
    if(this.state.name.trim() && this.state.salary.trim()){
      const data={
        name:this.state.name,
        salary:this.state.salary,
        age:this.state.age
      }
      this.props.add_employe(data)
      this.handleReset();
    }
  }
  handleReset = e =>{
    this.setState({
      name:'',
      salary:'',
      age:''
    })
  }
  componentDidMount(){
    this.props.get_employee();
  }
  componentWillReceiveProps(nextProps){
    if(nextProps){
      this.setState({
        emp:nextProps.emp.employees,
      })
    }
    console.log("data recved####:::"+JSON.stringify(nextProps));
  }
  render(){

    const empList=this.state.emp;
    console.log("my data:"+JSON.stringify(empList));
    return(
      <div>
                  <table className="table">
             <thead>
               <tr>
                 <th>Name</th>
                 <th>Salary</th>
                 <th>Age</th>
               </tr>
             </thead>
             <tbody>
             { empList.map( function(val, i) {
                   return(
                     <tr>
                       <td>{val.employee_name}</td>
                       <td>{val.employee_salary}</td>
                       <td>{val.employee_age}</td>
                     </tr>
               )

               })}






             </tbody>

            </table>


      </div>
    )
  }
}

EmployeeList.propTypes = {
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  errors: state.errors,
  emp: state.emp
})
export default connect(mapStateToProps,{get_employee}) (EmployeeList);
