import React from 'react';

class Expenses extends React.Component{
    style = {
        color:'red',
    }
    render(){
        return(<div className="incomeAndExpenses">
           {this.props.expenses.map((item)=><div><p>{item.description}</p><p style = {this.style}>{item.amount}</p></div>)}
            </div>)
    }
}

export default Expenses;