import React from 'react';
import './button.css';

class Button extends React.Component{
    render(){
        return(
            <a className="btn" href={"#" + this.props.btnText} style={this.props.bgColor}>{this.props.btnText}</a>
        )
    }
}

export default Button;