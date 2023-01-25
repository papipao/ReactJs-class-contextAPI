import React, { Component } from 'react';

class Book extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className='Book'>
        <img src={this.props.img} alt={this.props.title} />
        <h2>{this.props.title}</h2>
        <h4>{this.props.author}</h4>
      </article>
    );
  }
}

export default Book;
