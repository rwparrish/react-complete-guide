import React, { Component } from 'react';
import Person from './Person/Person'

class People extends Component {

    render() {
        return this.props.people.map((person, index) => { 
            return (
                <Person
                key={person.id}
                click={() => this.props.clicked(index)}
                name={person.name} 
                age={person.age} 
                nameChange={(event) => this.props.changed(event, person.id)} 
                />
            )
        });
    }
} 


    
        

    

export default People;
