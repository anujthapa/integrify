import React, { Component } from 'react';

import './App.css';
import { resolveComponents } from 'uri-js';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Body />
      </div>
    );
  }
}

class Body extends Component{

  constructor(props) {
    super(props)
  
    this.state = {
       r :0
    }
    this.getRandomNumber= this.getRandomNumber.bind(this);
  }

  getRandomNumber(){
    this.setState({r :Math.floor (Math.random()*10)})
    
  }
  
  render(){
    return(
      <div> 
      <h2>Component Lifecycle</h2>
      <button onClick={this.getRandomNumber}>Random number</button>
      <br/> <Numbers mynumber = {this.state.r}/>
      </div>
    )
  }
}

class Numbers extends React.Component{
  componentWillMount(){
    console.log("componentWillMount called here");
  }

  componentDidMount(){
    console.log("componentDidMount is called");
    
  }
  componentWillReceiveProps(newProps){
    console.log("componentWillReceiveProps called here");
  }

  shouldComponentUpdate(newProps,nextState){
    console.log("shouldComponentUpdate called here");
    return true;
  }
  componentWillUpdate(newProps,nextState){
    console.log("componentWillUpdate is called here");
    
  }
  componentDidUpdate(newProps,nextState){
    console.log("componentDidUpdate is called here");
  }
  componentWillUnmount(){
    console.log("componentWillUnmount is called here");
    
  }

  render(){
    return(
      <div>{this.props.mynumber}</div>
    )
  }
}

export default App;
