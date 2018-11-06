import React from 'react';
import './header.css'
import Background from '../img/hero.jpg';
import Button from './button';

const heroImage = {
background :`url(${Background})`,
height: '80vh',
width: '100vw'
} 

const btnColor = {
    backgroundColor : `#1d809f`
}

class Header extends React.Component{
    render(){
        return(
            <header style={heroImage}>
            <h1>{this.props.title}</h1>
            <p>{this.props.para}</p>
        <Button bgColor={{backgroundColor: "#1d809f"}} btnText="Find Out More"  />
            </header>
        ) 
    }
}

export default Header;