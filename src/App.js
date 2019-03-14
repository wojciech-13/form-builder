import React, { Component } from 'react';
import './App.css';
import FormComponent from './FormComponent/FormComponent.js';
class App extends Component {

  constructor() {
    super();
    this.state = {
      forms: []
    }
    this.handleClick = this.handleClick.bind(this);
  }



  handleClick(e) {
    const {name} = e.target;
    if(name === "addInput"){
    this.setState(prevState => {
      prevState.forms.push({dsadas: "something"});
      return {forms: prevState.forms}
    })
    }
    if(name === "addSubInput"){
    this.setState(prevState => {
      prevState.forms.push({condition: "something"});
      return {forms: prevState.forms}
    })
    }

  }

  render() {
    const formss = this.state.forms.map(form => <FormComponent {...form} handleClick={this.handleClick}/>)
    return (
      <div className="App">
          <h1> Form Builder </h1>
          {formss}
          <button name="addInput" onClick={this.handleClick} className="addInput">Add Input</button>
      </div>
    );
  }
}

export default App;
