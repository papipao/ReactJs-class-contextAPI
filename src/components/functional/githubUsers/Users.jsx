import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

function Users() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Github Users</h1>
      <ul className='users'>
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.avatar_url} alt={user.login} />
            <div>
              <h4>{user.login}</h4>
              <a href={user.html_url}>Profile</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
