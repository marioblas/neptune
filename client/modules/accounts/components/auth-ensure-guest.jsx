import React from 'react';
import PropTypes from 'prop-types';

const AuthEnsureGuest = ({ loggingIn, loggedIn, children, loggingInComp, loggedInComp }) => {
  if (loggingIn) {
    return loggingInComp;
  }
  if (loggedIn) {
    return loggedInComp;
  }
  return (<div>{children}</div>);
};

AuthEnsureGuest.propTypes = {
  loggingIn: PropTypes.bool,
  loggedIn: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  loggingInComp: PropTypes.node,
  loggedInComp: PropTypes.node,
};

AuthEnsureGuest.defaultProps = {
  loggingIn: false,
  loggingInComp: <div>Loading...</div>,
  loggedInComp: <div>You are already logged in</div>,
};

export default AuthEnsureGuest;
