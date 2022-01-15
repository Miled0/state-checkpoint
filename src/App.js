import Button from 'react-bootstrap/Button';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Person from './Person';

class App extends React.Component{
  state={
    show:false
  }
  handleclick=()=>this.setState({show:!this.state.show})
render(){
  return(
    <div className='App'>
      <Button variant="outline-primary" onClick={this.handleclick}>{this.state.show?"hide profile":"show profile"}</Button>
      {this.state.show?<Person/>:""}

    </div>
    
  );
}
};

export default App;
