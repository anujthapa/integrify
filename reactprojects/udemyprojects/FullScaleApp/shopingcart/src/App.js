import React, { Component } from 'react';

import './App.css';

import CourseSales from './component/Coursesales';

class App extends Component {
  render() {
    var courses = [
      {name:'Complete React course',price:199},
      {name:'Complete HTML course',price:200},
      {name:'Complete CSS course',price:250},
      {name:'Complete JS course',price:300}
    ]

    return (
      <div className="App">
        <CourseSales items ={courses}/>
      </div>
    );
  }
}

export default App;
