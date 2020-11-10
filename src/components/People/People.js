import React from 'react';
import Person from './Person/Person'

const people = (props) => props.people.map((person, index) => {
    //  mapping an array into JSX elements below
        return <Person
          key={person.id}
          click={() => props.clicked(index)}
          name={person.name} 
          age={person.age} 
          nameChange={(event) => props.changed(event, person.id)} />
      });

    

export default people;
