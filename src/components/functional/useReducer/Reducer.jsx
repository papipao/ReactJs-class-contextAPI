export const reducer = (state, action) => {
  if (action.type === 'ADD_USER') {
    const newUser = [...state.people, action.payload];
    return {
      ...state,
      people: newUser,
      isModalOpen: true,
      modalContent: 'User added',
    };
  }

  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Please add value',
    };
  }

  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isModalOpen: false,
    };
  }

  if (action.type === 'REMOVE_USER') {
    const newUser = state.people.filter((person) => person.id !== action.payload);
    return {
      ...state,
      people: newUser,
      isModalOpen: true,
      modalContent: 'User removed',
    };
  }

  throw new Error(`No matching action type ${action}`);
};
