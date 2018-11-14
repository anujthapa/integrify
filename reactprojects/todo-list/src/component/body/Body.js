import React from 'react';
import './body.css';



class Body extends React.Component{
    
    constructor(props){
        super(props);
        this.state ={
            items:['wake up','brush','school time']
        }
        this.showItems = this.showItems.bind(this);
        
    }
    
    showItems(){
        this.setState.items.map((item)=>{
            return<p>{item}</p>
        })
     }
    render(){
        return(
            <div className="body">
            <input type="text" id="inputText" placeholder="Add task to be done" ></input>
            <button onClick={this.props.showItems} id="submit">ADD</button>
            </div>
        )
    }
}

export default Body;