import React from 'react';
import Login from '../containers/login';

const AuthEnsureUser = ({ loggingIn, loggedIn, children }) => (
  <div>
    {loggingIn && <div>Loading...</div>}
    {!loggingIn && !loggedIn && <Login />}
    {loggedIn && children}
  </div>
);

AuthEnsureUser.propTypes = {
  loggingIn: React.PropTypes.bool,
  loggedIn: React.PropTypes.bool,
  children: React.PropTypes.node,
};

export default AuthEnsureUser;
