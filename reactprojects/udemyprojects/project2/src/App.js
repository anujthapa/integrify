import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
  this.yourname = "Indira"
    this.state = {
       

    }
  }
  

  sayHello(name){
    return "Hello  " +  name;
  }

  render() {
    const myName ="Anuj"
    return (
      <div className="App">
        <h2>Just some sample data : My name is {this.yourname} </h2>
        {
          this.sayHello("Anuj")
        }
      </div>
    );
  }
}

export default App;
