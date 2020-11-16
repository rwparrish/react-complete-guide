import React, { Component } from 'react';
import classes from './App.css';
import './App.css';
import People from '../components/People/People'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {

  state = { people: [
      { id: 'askjbaksjdf', name: 'Ryan', age: 34 },
      { id: 'cxvnxbcv', name: 'Maria', age: 29 },
      { id: 'sdfsfd', name: 'Zoë', age: 8 },
      { id: 'qerwetrw', name: 'Adette', age: 6 }
    ],
    otherState: 'some other state',
    showPeople: false,
    showCockpit: true
}
  
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
    const people = [...this.state.people]
    people.splice(personIndex, 1);
    this.setState({people: people})
  }

  togglePeoepleHandler = () => {
    const doesShow = this.state.showPeople
    this.setState({showPeople: !doesShow});
  }

  deleteCockpitHandler = () => {
    const isShowing = this.state.showCockpit
    this.setState({showCockpit: !isShowing})
  }

  render() {
    let people = null;
    if (this.state.showPeople) {
        people = <People 
          people={this.state.people}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler} />
    }

    let cockpit = null;
    if (this.state.showCockpit) {
        cockpit = <Cockpit

        title={this.props.appTitle}
        showPeople={this.state.showPeople}
        people={this.state.people}
        clicked={this.togglePeoepleHandler} />
      }

    return (
      <div className={classes.App}>
        <button onClick={this.deleteCockpitHandler}>Toggle Cockpit</button>
        {cockpit}
        {people}
      </div>
    );
  }
}

export default App;