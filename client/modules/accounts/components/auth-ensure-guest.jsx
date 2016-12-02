import React from 'react';

const AuthEnsureGuest = ({ loggingIn, loggedIn, children }) => {
  if (loggingIn) {
    return (<div>Loading...</div>);
  }
  if (loggedIn) {
    return (<div>You are already logged in</div>);
  }
  return (<div>{children}</div>);
};

AuthEnsureGuest.propTypes = {
  loggingIn: React.PropTypes.bool,
  loggedIn: React.PropTypes.bool,
  children: React.PropTypes.node,
};

export default AuthEnsureGuest;
