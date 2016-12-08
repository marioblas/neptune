import React from 'react';

const AuthEnsureGuest = ({ loggingIn, loggedIn, loggingInComp, loggedInComp, children }) => {
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
  loggedIn: React.PropTypes.bool,
  loggingInComp: React.PropTypes.node,
  loggedInComp: React.PropTypes.node,
  children: React.PropTypes.node,
};

AuthEnsureGuest.defaultProps = {
  loggingInComp: <div>Loading...</div>,
  loggedInComp: <div>You are already logged in</div>,
};

export default AuthEnsureGuest;
