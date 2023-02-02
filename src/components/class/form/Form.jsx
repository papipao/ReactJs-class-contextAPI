import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      username: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.name && this.state.username && this.state.email) {
      const newPerson = { ...this.state, id: new Date().valueOf() };
      this.props.addPerson(newPerson);
      this.setState({ name: '', email: '', username: '' });
    } else {
      alert('Please enter value');
    }
  }

  render() {
    return (
      <div>
        <article className='form'>
          <h3>Multiple Input</h3>
          <form onSubmit={this.handleSubmit}>
            <div className='form-control'>
              <label htmlFor='name'>Name:</label>
              <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
            </div>
            <div className='form-control'>
              <label htmlFor='email'>E-mail:</label>
              <input
                type='email'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className='form-control'>
              <label htmlFor='username'>Username:</label>
              <input
                type='text'
                name='username'
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <button type='submit'>Add User</button>
          </form>
        </article>
      </div>
    );
  }
}

export default Form;
