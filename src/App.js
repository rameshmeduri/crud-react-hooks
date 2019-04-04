import React, { useState, Fragment } from 'react';

import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
import UserTable from './tables/UserTable';
import usersData from './data';

const App = () => {
  
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState({ id: null, name: '', username: '' });
  const [editing, setEditing] = useState(false);
  
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]); // pass new Array
  };

  const deleteUser = (id) => {
    setEditing(false);
    setUsers(users.filter((user) => user.id !== id)); // remove matching id
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user))); // update matching id
  };

  const editUser = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username }); // set current user
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            (editing) 
          ? (
            <Fragment>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) 
          : (
            <Fragment>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </Fragment>
          )
          }
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editUser={editUser} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
