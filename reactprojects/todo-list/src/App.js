import React, { Component } from 'react';
import './App.css';

import Header from './component/header/Header';
import Body from './component/body/Body'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
