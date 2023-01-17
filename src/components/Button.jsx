import React from "react";
import './Button.css';

class Button extends React.Component{
    render(){
        return(<button 
            onClick={this.onButtonClick}
            className="btn"> {this.props.name}
        
        </button>);
    }

    constructor(props){
        super(props);
        //this.state = {name: 'Aceptar'}
        this.onButtonClick=this.onButtonClick.bind(this);
        
    }

    onButtonClick(){
        console.log('Click')
        this.props.ButtonClick();


    }
}
export default Button;