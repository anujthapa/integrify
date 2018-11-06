import React from 'react';
import './offer.css';
import Button from './button';

class Offer extends React.Component{
    render(){
        return(
            <div className="offer">
            <h1>{this.props.title}</h1>
            <p>{this.props.para}</p>
         <Button  btnText ="What We Offer"/>
            </div>
        )
    }
}

export default Offer;