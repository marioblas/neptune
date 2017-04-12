import React from 'react';
import PropTypes from 'prop-types';
import Login from '../containers/login';

const AuthEnsureUser = ({ loggingIn, loggedIn, children, loggingInComp, notLoggedInComp }) => {
  if (loggingIn) {
    return loggingInComp;
  }
  if (!loggedIn) {
    return notLoggedInComp;
  }
  return (<div>{children}</div>);
};

AuthEnsureUser.propTypes = {
  loggingIn: PropTypes.bool,
  loggedIn: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  loggingInComp: PropTypes.node,
  notLoggedInComp: PropTypes.node,
};

AuthEnsureUser.defaultProps = {
  loggingIn: false,
  loggingInComp: <div>Loading...</div>,
  notLoggedInComp: <Login />,
};

export default AuthEnsureUser;
