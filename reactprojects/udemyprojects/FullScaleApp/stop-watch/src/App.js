import React, { Component } from 'react';
import './App.css';

import Timer from './component/timer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer start={Date.now()}/>
      </div>
    );
  }
}

export default App;
