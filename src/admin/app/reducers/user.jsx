const userState = {
  users: [
    {
      id:   's001',
      name: 'Shuzo'
    },
    {
      id:   's002',
      name: 'Ikeda'
    },
    {
      id:   's003',
      name: 'Konno'
    },
    {
      id:   's004',
      name: 'Nishi'
    }
  ]
};

const user = (state=userState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return Object.assign({}, state, { users: [...state.users, action.user] });
    default:
      return state;
  }
};

export default user;
