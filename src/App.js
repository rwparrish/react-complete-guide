import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    people: [
      { name: 'Ryan', age: 34 },
      { name: 'Maria', age: 29 },
      { name: 'Zoë', age: 8 },
      { name: 'Adette', age: 6 }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!!</h1>
        <p>This is really working!</p>
        <Person name={this.state.people[0].name} age={this.state.people[0].age} />
        <button>Switch Name</button>
        <Person name={this.state.people[1].name} age={this.state.people[1].age} >My Hobbies: Food</Person>
        <Person name={this.state.people[2].name} age={this.state.people[2].age}/>
        <Person name={this.state.people[3].name} age={this.state.people[3].age}/>
      </div>
    );
    // the code above gets compiled to the code below. JSX above is much less cumbersome to write and easier to maintain. Importing 'React' allows us to write with JSX.
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
