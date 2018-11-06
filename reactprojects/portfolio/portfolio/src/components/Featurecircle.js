import React from 'react';
import './featurecircle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Circle extends React.Component{
    render(){
        return(
            <div className="featureList">
            <div className="circle">
            <FontAwesomeIcon icon="stroopwafel" />
            </div>
            <h4>{this.props.title}</h4>
            <p>{this.props.para}</p>
            </div>
        )
    }
}
export default Circle;