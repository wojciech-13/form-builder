import React, { Component } from 'react';
import './App.css';
import FormComponent from './FormComponent';
class App extends Component {

  constructor() {
    super();
    this.state = {
      forms: {id: ""}
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }

  render() {
    return (
      <div className="App">
          <h1> Form Builder </h1>
          <FormComponent condition="something"/>
          <button onClick={this.handleClick} className="addInput">Add Input</button>
      </div>
    );
  }
}

export default App;
