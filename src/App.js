import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = { people: [
      { name: 'Ryan', age: 34 },
      { name: 'Maria', age: 29 },
      { name: 'Zoë', age: 8 },
      { name: 'Adette', age: 6 }
    ],
    otherState: 'some other state',
    showPeople: false
}
  // React hooks 'useState' returns an array with two elements - ALWAYS - 1. current state 2. function to update state for React to rerender component
  // when using Hooks the function responsible for changing state does not merge new state with old - it replaces it
  // when using React Hooks setState should be used multiple times for each 'slice' of state
  // switchNameHandler = ( newName ) => {
  //   // console.log('Was Clicked');
  //   // DON'T SET MUTATE DIRECTLY ->: this.state.people[0].name = 'Dr. Phill';
  //   this.setState( {
  //     people: [
  //       { name: newName, age: 34 },
  //       { name: 'Maria', age: 29 },
  //       { name: 'Zoë', age: 8 },
  //       { name: 'Adette', age: 7 }
  //     ]
  //   } )
  // };

  nameChangedHandler = event => {
    this.setState( {
      people: [
        { name: 'Ryan', age: 34 },
        { name: event.target.value, age: 29 },
        { name: 'Zoë', age: 8 },
        { name: 'Adette', age: 7 }
      ]
    } )
  };

  deletePersonHandler = (personIndex) => {
    const people = this.state.people;
    people.splice(personIndex, 1);
    this.setState({people: people})
  }

  togglePeoepleHandler = () => {
    const doesShow = this.state.showPeople
    this.setState({showPeople: !doesShow});
  }

  render() {
    // inline styling is useful for scoping the style to the element you want
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let people = null;

    if (this.state.showPeople) {
        people = (
          <div>
            {this.state.people.map((people, index) => { 
              return <Person 
                      click={() => this.deletePersonHandler(index)}
                      name={people.name} 
                      age={people.age}/>
                })}
          </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App!!</h1>
        <p>This is really working!</p>
        <button
          style={style} 
          onClick={this.togglePeoepleHandler}>Toggle People</button>
          {people}
      </div>
    );
  }
    // the code above gets compiled to the code below. JSX above is much less cumbersome to write and easier to maintain. Importing 'React' allows us to write with JSX.
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
}

export default App;



// a 'method' is a function belonging to a class

{/* <Person
click={() => this.switchNameHandler('RyGuy')} 
name={this.state.people[0].name} 
age={this.state.people[0].age} />
<Person 
nameChanged={this.nameChangedHandler}
name={this.state.people[1].name} 
age={this.state.people[1].age} >My Hobbies: Food</Person>
<Person 
name={this.state.people[2].name} 
age={this.state.people[2].age}/>
<Person 
name={this.state.people[3].name} 
age={this.state.people[3].age}/> */}