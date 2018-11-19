import React from 'react';
import './total.css';

class Total extends React.Component {
    render() {
        return ( <div className="total">
            <h2> Total balance is:{this.props.totalBalance()}</h2></div> 
        );
    }
}
export default Total;

