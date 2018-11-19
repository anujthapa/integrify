import React from 'react';

class Income extends React.Component{
    style = {
        color:'green',
    }
    render(){
        return(
            <div className="incomeAndExpenses">
        {this.props.income.map((item)=><div><p>{item.description}</p><p style={this.style}>{item.amount}</p></div>)}
            </div>)
    }
}

export default Income;