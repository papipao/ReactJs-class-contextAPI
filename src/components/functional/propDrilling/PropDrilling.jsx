import { useState } from 'react';
import { data } from '../../../data';

function PropDrilling() {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((state) => {
      return state.filter((person) => person.id !== id);
    });
  };

  return (
    <div className='container'>
      <h3>PropDrilling</h3>
      <List people={people} removePerson={removePerson} />
    </div>
  );
}

const List = ({ people, removePerson }) => {
  return (
    <div>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} removePerson={removePerson} />;
      })}
    </div>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  );
};

export default PropDrilling;
