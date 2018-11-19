import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import Total from './component/Total';


          
class App extends Component {
   /* const account = accountBalance; */
   state =  {
    income : [{id: 1542381746684,
                description : 'Salary',
                amount :3000},
                {
                id:1542381786990,
                description : 'Insurance Refund',
                amount :200},
                {
                id:1542381786910,
                description : 'bonus',
                amount :1500}],
    expenses : [{
                id: 1542381786911,
                description : ' Room rent',
                amount :500},
                {
                id:1542381786912,
                description : 'Fuel',
                amount :150}]};
  addIncome = obj =>{
    const income =  this.state.income.slice();
    income.push(obj);
    this.setState({
      income
    });
  }
  
  addExpenses = obj => {
    const expenses = this.state.expenses.slice();
    expenses.push(obj);
    this.setState({
      expenses,
    });
  }; 


  calculateTotal = (accumulator, currentValue) => accumulator + currentValue.amount;  

  totalIncome = ()=>{
    return this.state.income.reduce(this.calculateTotal,0)
  }

  totalExpenses = ()=>{
    return this.state.expenses.reduce(this.calculateTotal,0)
  };

  totalBalance = ()=>{
    return this.totalIncome() + this.totalExpenses();
  }
  colorChange = ()=>{
    if( this.props.totalIncome()<this.props.totalExpenses()){
        this.h2.className=".green";
    }
    else{
        this.h2.className=".red";
    };
};
 /*  totalIncome = () => {
   console.log(this.state.income[0].amount + this.state.income[1].amount);
   const reducer= (accumulator, currentValue) => accumulator + currentValue;
   const data = this.state.income;
   const amount  = data.map((item)=>item.amount);
   console.log(amount.reduce(reducer));
  } */
  
  render(){
    return (
      <div className="App">
      <div>
        <Header name="Anuj Thapa" addIncome={this.addIncome} addExpenses={this.addExpenses} data = {this.state}/>
        <Body userIncome = {this.state.income} userExpenses = {this.state.expenses} submitFunction ={this.props.addData}  />
        </div>
        <Total totalBalance = {this.totalBalance} color = {this.props.colorChange}/>
      </div>
    );
  };
}


export default App;
