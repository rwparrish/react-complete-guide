import React, { Component } from "react";
import classes from "./Person.css"
import Aux from "../../../hoc/Aux"


class Person extends Component {
    render() {
        return (
            <Aux>
                {/* <div className={classes.Person}> */}
                    <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                    <h1>{this.props.id}</h1>
                    <p>{this.props.children}</p>
                    <input type="text" onChange={this.props.nameChange} value={this.props.name}/>
                {/* </div> */}
            </Aux>
        );
    };
};

export default Person;

// by the time ReactDOM.render does its thing. The function component above will be a normal HTML element on the DOM. This can be verified by inpecting the DOM in chrome.