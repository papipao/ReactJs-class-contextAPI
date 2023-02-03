import { useState } from 'react';

function Form() {
  const [person, setPerson] = useState({
    id: new Date().valueOf(),
    name: '',
    email: '',
    username: '',
  });
  const [people, setPeople] = useState([]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (person.name && person.email && person.username) {
      const newPerson = { ...person, id: new Date().valueOf() };
      console.log(people);
      setPeople((state) => [...state, newPerson]);
      setPerson({ name: '', email: '', username: '' });
    } else {
      alert('Please enter values');
    }
  };

  return (
    <div className='container'>
      <article className='form'>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' value={person.name} onChange={handleChange} />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>E-mail:</label>
            <input type='email' name='email' value={person.email} onChange={handleChange} />
          </div>
          <div className='form-control'>
            <label htmlFor='username'>Username:</label>
            <input type='text' name='username' value={person.username} onChange={handleChange} />
          </div>
          <button type='submit'>Add Person</button>
        </form>
      </article>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            {person.name} - {person.email} - {person.username}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Form;
