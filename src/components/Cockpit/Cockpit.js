import React from 'react';
import classes from './Cockpit.css';

 const cockpit = (props) => {
    const assignedClasses = [];
    let buttonClasses = '';
    if (props.showPeople) {
        buttonClasses = classes.Red
    }

    if (this.state.people.length <= 2 ) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if(this.state.people.length <= 1 ) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App!!</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={buttonClasses.join(' ')} onClick={this.togglePeoepleHandler}>
            Toggle People
            </button>
        </div>
    )
}

export default cockpit
