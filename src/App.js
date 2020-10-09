import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!!</h1>
        <p>This is really working!</p>
        <Person name="Ryan" age="34" />
        <Person name="Maria" age="29" >My Hobbies: I like to eat.</Person>
        <Person name="Zoë" age="8"/>
        <Person name="Adette" age="6"/>
      </div>
    );
    // the code above gets compiled to the code below. JSX above is much less cumbersome to write and easier to maintain. Importing 'React' allows us to write with JSX.
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
