import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {add_employe} from '../redux/actions/employee';
class NewPost extends Component {
  constructor() {
super()
  }
  state ={
    name:'',
    salary:'',
    age:''
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
  componentWillReceiveProps(nextProps){
    console.log("data recved####:::"+JSON.stringify(nextProps));
  }
  render(){
    return(
      <div>
      <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
              <input
              type="text"
              placeholder="Name"
              className="form-control"
              name="name"
              onChange={ this.handleInputChange }
              value={ this.state.name }
            />
          </div>
          <div className="form-group">
              <input
              type="text"
              placeholder="Salary"
              className="form-control"
              name="salary"
              onChange={ this.handleInputChange }
              value={ this.state.salary }
            />
          </div>
          <div className="form-group">
              <input
              type="text"
              placeholder="Age"
              className="form-control"
              name="age"
              onChange={ this.handleInputChange }
              value={ this.state.age }
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary">Add Employee</button>
            <button type="button" className="btn btn-warning" onClick={ this.handleReset }>
              Reset
            </button>
          </div>
        </form>
      </div>
    )
  }
}

NewPost.propTypes = {
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  errors: state.errors,
  emp: state.emp
})
export default connect(mapStateToProps,{add_employe}) (NewPost);
