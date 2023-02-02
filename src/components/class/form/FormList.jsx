import React, { Component } from 'react';
import Form from './Form';

class FormList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        { id: new Date().valueOf(), name: 'John Doe', email: 'john@doe.com', username: 'JohnD' },
      ],
    };
    this.addPerson = this.addPerson.bind(this);
    this.renderPeron = this.renderPeron.bind(this);
  }

  renderPeron() {
    return (
      <ul>
        {this.state.people.map((person) => (
          <li key={person.id}>
            {person.name} | {person.email} | {person.username}
          </li>
        ))}
      </ul>
    );
  }

  addPerson(person) {
    this.setState((state) => ({
      people: [...state.people, person],
    }));
  }

  render() {
    console.log(this.state.people);
    return (
      <div className='container'>
        <Form addPerson={this.addPerson} />
        {this.renderPeron()}
      </div>
    );
  }
}

export default FormList;
