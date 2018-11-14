import React from'react';
import './Coursesales.css';

class Coursesales extends React.Component{
    sumPrice=(price)=>{
       return this.setState({total: this.state.total + price});
    }
constructor(props) {
  super(props)

  this.state = {
     total:0,
  }
  this.sumPrice = this.sumPrice.bind(this);
}
    render(){
        console.log(this.props.items);
        var courses =  this.props.items.map((item,i)=>{
            return <Course name = {item.name} price={item.price} 
            key ={i} sumPrice={this.sumPrice} active={item.active} />
        });
        return(
            <div>
            <h1>You can buy Courses Bellow: </h1>
            <div id="courses">
            {courses}
            <p id="total"><b>Total : {this.state.total}</b></p>
            </div>
            </div>
        )
    }
}

class Course extends React.Component{
    clicker = ()=>{
        let active = !this.state.active  ;
        this.setState({active : active})
        this.props.sumPrice(active ? this.props.price : -this.props.price)
    }
    constructor(props) {
      super(props);
    
      this.state = {
         active:false
      };
      this.clicker = this.clicker.bind(this);
    }
    
    render(){
        return(
            <div className="hero">
            <p id="course" onClick={this.clicker}>{this.props.name}<button>{this.props.price}</button></p>
            </div>
        )
    }
}

export default Coursesales;