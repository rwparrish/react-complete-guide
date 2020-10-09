import React from "react";

// 'props' is an object with all the properties of this component
// when useing class-based components in React it's 'this.props.value'
// 'props.childern' inlcudes any elements bewteen opening and closing tag of the component

const person = ( props ) => {
    return (
        <div>
            <p>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
        
    );
};


export default person;

// by the time ReactDOM.render does its thing. The function component above will be a normal HTML element on the DOM. This can be verified by inpecting the DOM in chrome.