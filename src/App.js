import React, { Component } from 'react';
import './App.css';
import FormComponent from './FormComponent';
class App extends Component {

  constructor() {
    super();
    this.state = {
      forms: []
    }
    this.handleClick = this.handleClick.bind(this);
  }



  handleClick() {
    this.setState(prevState => {
      prevState.forms.push({type: "something"});
      return {forms: prevState.forms}
    })
  }

  render() {
    const formss = this.state.forms.map(form => <FormComponent {...form}/>)
    return (
      <div className="App">
          <h1> Form Builder </h1>
          {formss}
          <button onClick={this.handleClick} className="addInput">Add Input</button>
      </div>
    );
  }
}

export default App;
