import React, { Component } from 'react';
import './Birthday.css';
import { data } from './data';
import List from './List';

class Birthday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: data,
    };
  }

  render() {
    console.log(this.state.people.length);
    return (
      <main>
        <section className='container'>
          <h3>{this.state.people.length} birthdays today</h3>
          <List people={this.state.people} />
          <button onClick={() => this.setState({ people: [] })}>Clear All</button>
        </section>
      </main>
    );
  }
}

export default Birthday;
