import React, { Component } from 'react';
import './components/navigation.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Offer from './components/Offer'
import Offersecond from'./components/Offersecond';
import Nextwebsite from './components/Nextwebsite';

//for fontawasome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation logoTitle ="ANUJ THAPA"/>
        <Header title="STYLISH PORTFOLIO" para="A Free Bootstrap Theme by Start Bootstrap" btnText="Find Out More"/>
        <Offer title="Stylish Portfolio is the perfect theme for your next project" para="This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at
        "/>
        <Offersecond para ="SERVICES" title="What We Offer" />
        <Nextwebsite title="Welcome to your " para="next website!"/>

      </div>
    );
  }
}

export default App;
