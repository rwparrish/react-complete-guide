import React from "react";
import classes from "./Person.css"
// import styled from "styled-components";


// 'props' is an object with all the properties of this component
// when useing class-based components in React it's 'this.props.value'
// 'props.childern' inlcudes any elements bewteen opening and closing tag of the component
// const StyledDiv = styled.div`
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;

//     '@media (min-width: 55px)': {
//         width: 450px;
//     }
// `;

const person = ( props ) => {
    // below is an example error
    const rnd = Math.random();
    if (rnd > 0.7) {
        throw new Error("Something went wrong")
    };
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.nameChange} value={props.name}/>
        </div>
    )
};

export default person;

// by the time ReactDOM.render does its thing. The function component above will be a normal HTML element on the DOM. This can be verified by inpecting the DOM in chrome.