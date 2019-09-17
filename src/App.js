import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewPost from './views/NewPost';
import EmployeeList from './views/EmployeeList';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component{
  render(){
    return(
      <div className="container">
      <div className="row">
        <div className="col-md-6">
          <NewPost/>
        </div>
        <div className="col-md-6">
        <EmployeeList/>
        </div>

      </div>
      </div>
    )
  }
}

export default App;
