import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.people);
    return (
      <div>
        {this.props.people.map((person) => (
          <article key={person.id} className='person'>
            <img src={person.image} alt={person.name} />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age} years</p>
            </div>
          </article>
        ))}
      </div>
    );
  }
}

export default List;
