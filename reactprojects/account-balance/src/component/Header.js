import React from 'react';
import './header.css';

class Header extends React.Component{
  state = {
    id:0,
    description: '',
    amount : 0 ,
    heading : ''
  };

  dataHandle = e =>{
    let target = e.target;
    let name = target.name;
    let value =  target.value;
    this.setState({
      [name] : value,
    })
  }

  addData = (e)=>{
    e.preventDefault ();
    var newId = Date.now();
    this.state.id= newId
    if(this.state.heading==='income'){
      this.props.addIncome(this.state);
    }
    else if(this.state.heading==='expenses'){
      this.props.addExpenses(this.state)
    }
  }


    
    render(){ 
       
        
        return(
            <header>
            <h1>Welcome {this.props.name}</h1>
            <div className="input">
            <input 
                ref = {(input)=>{this.description=input}}
                type="text"
                placeholder="description"
                id="description"
                name="description"
                onChange={this.dataHandle}
                />
            <input
              ref={(input)=>{this.amount=input}} 
              type="text"
              name="amount"
              placeholder="Amount"
              id="amount"
              onChange={this.dataHandle}
              />
            <select 
              name="heading"
              onChange={this.dataHandle}>
              <option value="income">Income</option>
              <option value="expenses">Expenses</option>
            </select>
            <button onClick={this.addData}>ADD</button>
           
            </div>
            </header>
        )
    }
}

export default Header;