import { useState, useReducer } from 'react';
import Modal from './Modal';
import { reducer } from './Reducer';

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
};

function User() {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleChange = (evt) => {
    setName(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (name) {
      const newUser = { id: new Date().valueOf(), name };
      dispatch({ type: 'ADD_USER', payload: newUser });
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <div className='container'>
      {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal} />}
      <h3>UseReducer</h3>
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input type='text' name='name' value={name} onChange={handleChange} />
        </div>
        <button type='submit'>Add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <p>{person.name}</p>
            <button onClick={() => dispatch({ type: 'REMOVE_USER', payload: person.id })}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default User;
