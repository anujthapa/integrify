import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';


class App extends Component {
  render() {
    return (

    <div>
    <Navbar />
    <Header />
    <Body />
    <Footer />
      </div>
    );
  }
}

export default App;
