import React from 'react';
import './body.css';
import Income from './Income';
import Expenses from './Expenses';
import Total from './Total';

class Body extends React.Component{
    render(){
        return(
            <div className="body">
            <Income income={this.props.userIncome} />
            <Expenses expenses = {this.props.userExpenses} />
            </div>
        )
    }
}

export default Body;