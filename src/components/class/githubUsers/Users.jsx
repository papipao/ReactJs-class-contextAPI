import React, { Component } from 'react';

const url = 'https://api.github.com/users';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    const res = await fetch(url);
    const data = await res.json();

    this.setState({ users: data });
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>GitHub Users</h1>
        <ul className='users'>
          {this.state.users.map((user) => (
            <li key={user.id}>
              <img src={user.avatar_url} alt={user.login} />
              <div>
                <h4>{user.login}</h4>
                <a href={user.html_url}>profile</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Users;
