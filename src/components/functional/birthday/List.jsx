import React from 'react';

function List({ people }) {
  console.log(people);
  return (
    <div>
      {people.map((person) => (
        <article key={person.id} className='person'>
          <img src={person.image} alt={person.name} />
          <div>
            <h4>{person.name}</h4>
            <p>{person.age}years</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default List;
