import React, { Component } from 'react';
import Person from './Person/Person'

class People extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[People.js] getDerivedStateFromProps');
    //     return state;
    // }

    // import React, { PureComponent } from 'react'  
    // class People extends PureComponent
    // will accomplish the same thing as below - importing PureComponent checks for any changes in any prop of the component.
    // PireComponent is a normal component that already implements a complete prop check using shouldComponentUpdate
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[People.js] shouldComponentUpdate')
        if (
            nextProps.people !== this.props.people ||
            nextProps.changed !== this.props.changed ||
            nextProps.clicked !== this.props.clicked
            ) {
            return true;
        } else {
            return false 
        }
        // return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[People.js] getSnapshotBeforeUpdate')
        return { message: 'Snapshot!' }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[People.js] componentDidUpdate')
        console.log(snapshot)
    }

    componentWillUnmount() {
        console.log('[People.js] componentWillUnmount')
    }

    render() {
        console.log('[People.js] rendering...')
        return this.props.people.map((person, index) => { 
            return (
                <Person
                key={person.id}
                click={() => this.props.clicked(index)}
                id={person.id}
                name={person.name} 
                age={person.age} 
                nameChange={(event) => this.props.changed(event, person.id)} 
                />
            )
        });
    }
} 


    
        

    

export default People;
