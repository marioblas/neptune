import React from 'react';
import Login from '../containers/login';

const AuthEnsureUser = ({ loggingIn, loggedIn, children }) => {
  if (loggingIn) {
    return (<div>Loading...</div>);
  }
  if (!loggedIn) {
    return (<Login />);
  }
  return (<div>{children}</div>);
};

AuthEnsureUser.propTypes = {
  loggingIn: React.PropTypes.bool,
  loggedIn: React.PropTypes.bool,
  children: React.PropTypes.node,
};

export default AuthEnsureUser;
