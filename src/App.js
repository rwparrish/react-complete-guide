import React, { Component } from 'react';
// import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

// const StyledButton = styled.button`
//   background-color: ${props => props.altColor ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1x solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${props => props.altColor ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
// `;
class App extends Component {

  state = { people: [
      { id: 'askjbaksjdf', name: 'Ryan', age: 34 },
      { id: 'cxvnxbcv', name: 'Maria', age: 29 },
      { id: 'sdfsfd', name: 'Zoë', age: 8 },
      { id: 'qerwetrw', name: 'Adette', age: 6 }
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

  // nameChangeHandler = (event, personId) => {
  //   // 1. find the correct person in the original state
  //   const personIndex = this.state.people.findIndex(person => {
  //   // return true or false depending if person is found or not
  //   // below retunrs true
  //      return person.id === personId
  //   })
  //   // 2. make a copy of the original person from people array so as not to mutate original data(state)
  //   const person = {
  //     ...this.state.people[personIndex]
  //   };
  //   // below using Object.assign works the same as above - above is more modern
  //   // const person = Object.assign({}, this.state.people[personIndex])
  //   // 3. update the name of the person that has been found in the original array
  //   person.name = event.target.value;
  //   // 4. update the original array with the new person
  //   const people = [...this.state.people];
  //   people[personIndex] = person
    
  //   this.setState( {
  //     people: people } )
  // };
  
  nameChangeHandler = (event, personId) => {
    const personIndex = this.state.people.findIndex(p => {
      return p.id === personId
    });

    const person = {
      ...this.state.people[personIndex]
    };

    person.name = event.target.value;

    const people = [...this.state.people];
    people[personIndex] = person;

    this.setState({
      people: people
    });
  };
    

  deletePersonHandler = (personIndex) => {
  // retrieve the orignal array of people USING slice with no arguments make a copy of the original data
  // this is important because we do not want to mutate the original data
    // const people = this.state.people.slice();
  // using the spread operator is more modern and accomplishes the same thing as the code above
  // 1. create a new array 2. spread out the original data and put it into the new array
    const people = [...this.state.people]
  // remove on person from the array
    people.splice(personIndex, 1);
  // set the value of people in state to the new people array
    this.setState({people: people})
  }

  togglePeoepleHandler = () => {
    const doesShow = this.state.showPeople
    this.setState({showPeople: !doesShow});
  }

  render() {
    // inline styling is useful for scoping the style to the element you want
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let people = null;

    if (this.state.showPeople) {
        people = (
          <div>
            {/* mapping an array into JSX elements below */}
            {this.state.people.map((person, index) => {
              return <Person
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age} 
                nameChange={(event) => this.nameChangeHandler(event, person.id)} />
            })}
          </div>
      );
      // style.backgroundColor = 'red';
      // // below - beacuse ':hover' STRING property of the style object square brackets must be used to access it 
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }

    const classes = [];
    if (this.state.people.length <= 2 ) {
      classes.push('red'); // classes = ['red']
    }
    if(this.state.people.length <= 1 ) {
      classes.push('bold'); // classes = ['red', 'bold']
    }


    return (
      <div className="App">
        <h1>Hi, I'm a React App!!</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button className="button" onClick={this.togglePeoepleHandler}>
          Toggle People
        </button>
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