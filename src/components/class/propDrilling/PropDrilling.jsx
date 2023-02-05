import React, { Component } from 'react';
import { data } from '../../../data';
import List from './List';

class PropDrilling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: data,
    };
    this.removePerson = this.removePerson.bind(this);
  }

  removePerson(id) {
    this.setState((state) => {
      return {
        people: state.people.filter((person) => person.id !== id),
      };
    });
  }

  render() {
    return (
      <div className='container'>
        <h3>PropDrilling</h3>
        <List people={this.state.people} removePerson={this.removePerson} />
      </div>
    );
  }
}

export default PropDrilling;
