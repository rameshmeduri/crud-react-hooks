import React, { useState, useEffect } from 'react';

const EditUserForm = ({ currentUser, updateUser, setEditing }) => {
  
  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateUser(user.id, user);
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
      <button>Update</button>
      <button
        onClick={() => setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
