import React from 'react';
import '../components/body.css'

class Body extends React.Component{
    render(){
        return(
            <div className="body">
            <div>{this.props.name.map((item)=><div className="result" >{item}</div>)}</div>
            </div>
        )
    }
}

export default Body;