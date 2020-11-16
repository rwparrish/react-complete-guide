import React, { useEffect } from 'react';
import classes from './Cockpit.css';

 const cockpit = (props) => {

   useEffect(() => {
     console.log('[Cockpit.js] useEffect')
     setTimeout(() => {
       alert("saved data to cloud")
     }, 1000)
     return () => {
       console.log('[Cockpit.js] cleanup useEffect')
     }
    // Http request...
    // tricky to use becuase it combines componentDidMount and componentDidUdate
    // passing an empty array to the second arguemnt (array of which data are used in effect) 
    // tells React to only useEffect when the component rerenders the first time - making it componentDidMount only 
    }, []);

    const assignedClasses = [];
    let buttonClasses = '';
    if (props.showPeople) {
        buttonClasses = classes.Red
    }

    if (props.peopleLength <= 2 ) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if(props.peopleLength <= 1 ) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title }</h1>
            <p className={assignedClasses}>This is really working!</p>
            <button className={buttonClasses} onClick={props.clicked}>Toggle People</button>
        </div>
    )
}

export default React.memo(cockpit) 
