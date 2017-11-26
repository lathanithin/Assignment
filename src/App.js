import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Row,DropdownButton,MenuItem} from 'react-bootstrap';

class App extends Component {
  constructor(props){
  super(props);
  this.state = {
    key1: '',
    key2 : '',
    Key3 : ''
  };
  this.changeState = this.changeState.bind(this);
  this.changeState1 = this.changeState1.bind(this);
  this.changeState2 = this.changeState2.bind(this);
  this.multistate = this.multistate.bind(this);
}
changeState(value){
  this.setState(
    {key1 : 'A1,A2,A3'}
  );
}
changeState1(value){
  this.setState(
    {key2 : 'B1,B2,B3'}
  );
}
changeState2(value){
  this.setState(
    {key3 : 'C1,C2,C3'}
  );
}

  multistate(value){
    this.setState(
      {
        key4 : this.state.key1,
        key5 : this.state.key1
      }
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Row>
        <h2>shfsjdfh</h2>
        <DropdownButton  title="Dropdown">
           <MenuItem eventKey="1" onSelect={this.changeState} active>A</MenuItem>
           <MenuItem eventKey="2"  onSelect={this.changeState1}>B</MenuItem>
           <MenuItem eventKey="3" onSelect={this.changeState2}>C</MenuItem>
         </DropdownButton>
         <DropdownButton  title="Dropdown1">
           <MenuItem eventKey="1" onSelect={this.multistate} >{this.state.key1}</MenuItem>
           <MenuItem eventKey="2" >{this.state.key2}</MenuItem>
           <MenuItem eventKey="3" >{this.state.key3}</MenuItem>
          </DropdownButton>
          <DropdownButton  title="Dropdown2">
             <MenuItem eventKey="1">{this.state.key4},{this.state.key5}</MenuItem>
             <MenuItem eventKey="2">{this.state.key2}</MenuItem>
             <MenuItem eventKey="3" >{this.state.key3}</MenuItem>
           </DropdownButton>
        </Row>
      </div>
    );
  }
}

export default App;
