import React from 'react';

class Navigation extends React.Component{
    render(){
        const sections = ['Home','About Me','Portfolio','Contact Me'];
        const navLinks = sections.map(section =>{
            return <li><a href={'#' + section}>{section}</a></li>
        });
        return(
            <div className="nav">
            <h2>{this.props.logoTitle}</h2>
            <ul>
            {navLinks}
            </ul>
            </div>
        )
    };
}
export default Navigation;
