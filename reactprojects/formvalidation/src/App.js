import React, { Component } from 'react';
import './App.css';
import AddUser from './component/AddUser';

class App extends Component {
  state = {
    user: [],
  };

  countUser = ()=>{
    return this.state.user.length 
  }
  addUser = obj =>{
    const user =  this.state.user.slice();
    user.push(obj);
    this.setState({
      user,
    })
  }
  render() {
    return (
      <div className="App">
        <AddUser addUser={this.addUser} totalUser = {this.countUser} />
      </div>
    );
  }
}

export default App;
