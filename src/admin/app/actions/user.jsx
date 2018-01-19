const addUser = (user) => {
  const action = {
    type: 'ADD_USER',
    user
  };

  return action;
};

export default addUser;
