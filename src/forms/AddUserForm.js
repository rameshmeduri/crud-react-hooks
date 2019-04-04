import React, { useState } from 'react';

const AddUserForm = ({addUser}) => {
  const initialFormState = { id: null, name: '', username: '' };
  const [user, setUser] = useState(initialFormState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.username) return;
    addUser(user);
    setUser(initialFormState);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={onChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={onChange}
      />
      <button>Add</button>
    </form>
  );
};

export default AddUserForm;
