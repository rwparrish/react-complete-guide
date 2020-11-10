import React from 'react';
import classes from './Cockpit.css';

 const cockpit = (props) => {
    const assignedClasses = [];
    let buttonClasses = '';
    if (props.showPeople) {
        buttonClasses = classes.Red
    }

    if (props.people.length <= 2 ) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if(props.people.length <= 1 ) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses}>This is really working!</p>
            <button className={buttonClasses} onClick={props.clicked}>Toggle People</button>
        </div>
    )
}

export default cockpit
