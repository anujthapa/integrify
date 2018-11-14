import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  firstname = React.createRef();
  lastname = React.createRef();
  age = React.createRef();
  agree = React.createRef();

  handleSubmit = (e)=>{
    e.preventDefault();
     console.log({
      firstname:this.firstname.value,
      lastname:this.lastname.value,
      age:this.age.current.value,
      agree : this.agree.current.checked
      /* <input ref={input => this.firstname=input} placeholder="firstname"/>//this is Uncontrolled input.<br/> */
    }) 
    e.currentTarget.reset();//reset all the input field
  }
  render() {
    return (
      <div className="App">
        <h1>Contolled and Uncontrolled Input</h1>
        <h1>Contolled input</h1>
        <form onSubmit={this.handleSubmit}>
        <input ref={this.firstname} placeholder="firstname"/><br/>
        <input ref={this.lastname} placeholder="lastname"/><br/>
        <input ref={this.age } placeholder="age"/><br/>
        <input type="checkbox" name="agree" ref={this.agree} /><br />
        <button>Submit</button>
        </form>
        <Controllinput />
      </div>
     
    );
  }
}

class Controllinput extends React.Component{
  render(){
    return(
      <div>
      <h1>Contolled input</h1>
      <form onSubmit={this.handleSubmit}>
      <input ref={input => this.firstname=input} placeholder="firstname" Value={this.state.value}/><br />
      <input ref={input => this.lastname=input} placeholder="lastname" Value={this.state.value}/><br/>
      <input ref={input => this.age=input} placeholder="age" Value={this.state.value}/><br/>
      <input type="checkbox" name="agree" ref={this.agree} /><br />
      <button>Submit</button>
      </form>
      </div>
    )
  }
}

export default App;
