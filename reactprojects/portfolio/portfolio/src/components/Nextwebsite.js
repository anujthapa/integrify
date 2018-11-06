import React from 'react';
import './nextwebsite.css'
import Next from '../img/next.jpg';
import Button from './button';

const heroImage = {
background :`url(${Next})`,
height: '55vh',
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
            <h1>{this.props.para}</h1>
        <Button bgColor={{backgroundColor: "#1d809f"}} btnText="Downlaod Now!"  />
            </header>
        ) 
    }
}

export default Header;