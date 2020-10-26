import Radium from "radium";
import React from "react";
import './Person.css';

// 'props' is an object with all the properties of this component
// when useing class-based components in React it's 'this.props.value'
// 'props.childern' inlcudes any elements bewteen opening and closing tag of the component

const person = ( props ) => {
    const style = {
        '@media (min-width 55px)': {
            width: '450px'
        }
    }
    return (
        <div className='Person' style={style}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.nameChange} value={props.name}/>
        </div>
    )
};

export default Radium(person);

// by the time ReactDOM.render does its thing. The function component above will be a normal HTML element on the DOM. This can be verified by inpecting the DOM in chrome.