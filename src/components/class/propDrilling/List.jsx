import React, { Component } from 'react';
import SinglePerson from './SinglePerson';

class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { people, removePerson } = this.props;
    return (
      <div>
        {people.map((person) => (
          <SinglePerson key={person.id} {...person} removePerson={removePerson} />
        ))}
      </div>
    );
  }
}

export default List;
