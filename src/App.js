import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
  // React hooks 'useState' returns an array with two elements - ALWAYS - 1. current state 2. function to update state for React to rerender component
  // when using Hooks the function responsible for changing state does not merge new state with old - it replaces it
  const [ peopleState, setPeopleState ] = useState({
    people: [
      { name: 'Ryan', age: 34 },
      { name: 'Maria', age: 29 },
      { name: 'Zoë', age: 8 },
      { name: 'Adette', age: 6 }
    ],
  });
  
  // when using React Hooks setState should be used multiple times for each 'slice' of state
  const [otherState, setOtherState] = useState('some other value');

  console.log(peopleState, otherState);

  const switchNameHandler = () => {
    // console.log('Was Clicked');
    // DON'T SET MUTATE DIRECTLY ->: this.state.people[0].name = 'Dr. Phill';
    setPeopleState({
      people: [
        { name: 'Dr. Phill', age: 34 },
        { name: 'Maria', age: 29 },
        { name: 'Zoë', age: 8 },
        { name: 'Adette', age: 7 }
      ]
    
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App!!</h1>
      <p>This is really working!</p>
      <Person name={peopleState.people[0].name} age={peopleState.people[0].age} />
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={peopleState.people[1].name} age={peopleState.people[1].age} >My Hobbies: Food</Person>
      <Person name={peopleState.people[2].name} age={peopleState.people[2].age}/>
      <Person name={peopleState.people[3].name} age={peopleState.people[3].age}/>
    </div>
  );
    // the code above gets compiled to the code below. JSX above is much less cumbersome to write and easier to maintain. Importing 'React' allows us to write with JSX.
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
}

export default App;

// a 'method' is a function belonging to a class

