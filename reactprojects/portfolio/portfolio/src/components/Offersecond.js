import React from 'react';
import './offersecond.css';
import Circle from './Featurecircle'

class Offersecond extends React.Component{
    render(){
        return(
            <div className="offersecond">
                <p>{this.props.para}</p>
                <h1>{this.props.title}</h1>
                <div className="circleDiv">
                <Circle title="Responsive" para="Looks greate on any screen size!"/>
                <Circle title="Redesigned" para="Freshly redesigned for Bootstrap 4."/>
                <Circle title="Favorited" para="Millions of users  Start Bootstrap!!"/>
                <Circle title="Question" para="I mustache you a question..."/>
                </div>
              
            </div>
        )
    }
}

export default Offersecond;