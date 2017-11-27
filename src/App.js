import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Row,DropdownButton,MenuItem} from 'react-bootstrap';

class App extends Component {
  constructor(props){
  super(props);
  this.state = {
    selectedValue : "",
    appendValue : []
  };
  this.changeDropDown = this.changeDropDown.bind(this);
}

  shouldComponentUpdate(nextProps, nextState){
    if(this.state.selectedValue !=  nextState.selectedValue){
      console.log(nextState.selectedValue);
      switch(nextState.selectedValue) {
        case "1" :
        this.setState({
          appendValue : ["A1","A2","A3"]
        });
        break;
        case "2" :
        this.setState({
          appendValue : ["B1","B2","B#"]
        });
        break;
        case "3" :
        this.setState({
          appendValue : ["C1","C2","C3"]
        });
        break;
      }
    }
    return true;
  }

  changeDropDown(e){
    this.setState({
      selectedValue : e.target.value
    });
  }

  render() {
    console.log(this.state.appendValue);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Row>
        <h2>shfsjdfh</h2>
        <select onChange={this.changeDropDown} className="form-control cust-form">
         <option value={1}>A</option>
         <option value={2}>B</option>
         <option value={3}>C</option>
       </select>
        <select  className="form-control cust-form" >
          {
            this.state.appendValue.map((value,index)=>{
              return <option key={index} value={index}>{value}</option>;
            })
          }
        </select>
        </Row>
      </div>
    );
  }
}

export default App;
