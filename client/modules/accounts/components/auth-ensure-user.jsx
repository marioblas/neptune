import React from 'react';
import Login from '../containers/login';

const AuthEnsureUser = ({ loggingIn, loggedIn, loggingInComp, notLoggedInComp, children }) => {
  if (loggingIn) {
    return loggingInComp;
  }
  if (!loggedIn) {
    return notLoggedInComp;
  }
  return (<div>{children}</div>);
};

AuthEnsureUser.propTypes = {
  loggingIn: React.PropTypes.bool,
  loggedIn: React.PropTypes.bool,
  loggingInComp: React.PropTypes.node,
  notLoggedInComp: React.PropTypes.node,
  children: React.PropTypes.node,
};

AuthEnsureUser.defaultProps = {
  loggingInComp: <div>Loading...</div>,
  notLoggedInComp: <Login />,
};

export default AuthEnsureUser;
