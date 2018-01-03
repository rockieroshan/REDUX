import React from 'react';
import UserList from '../containers/UserList';
import UserDetails from '../containers/details';

const App = () => (
  <div>
  <h1>User list:</h1> 
  <UserList />
  <hr />
  <h1>User details:</h1>
  <UserDetails />
  </div>
);

export default App;