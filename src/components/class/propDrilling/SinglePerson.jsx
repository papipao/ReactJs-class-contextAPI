import React, { Component } from 'react';

class SinglePerson extends Component {
  render() {
    const { id, name, removePerson } = this.props;
    return (
      <div className='item'>
        <h4>{name}</h4>
        <button onClick={() => removePerson(id)}>Remove</button>
      </div>
    );
  }
}

export default SinglePerson;
