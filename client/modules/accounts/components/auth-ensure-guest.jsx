import React from 'react';

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
  loggingIn: React.PropTypes.bool,
  loggedIn: React.PropTypes.bool.isRequired,
  children: React.PropTypes.node.isRequired,
  loggingInComp: React.PropTypes.node,
  loggedInComp: React.PropTypes.node,
};

AuthEnsureGuest.defaultProps = {
  loggingInComp: <div>Loading...</div>,
  loggedInComp: <div>You are already logged in</div>,
};

export default AuthEnsureGuest;
