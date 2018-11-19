import React from 'react';
import './header.css';

class Header extends React.Component{
    render(){
        return(
            <header>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subTitle}</h2>
            <span>{this.props.searchFrist}</span>
            <span>{this.props.searchSecond}</span>
            <input type="text"  id="searchCountries"/>
            </header>
        )
    }
}

export default Header;