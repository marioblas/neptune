import React from 'react';
import Login from '../containers/login';

const AuthEnsureRole = ({ loggingIn, loggedIn, allowed, silent, children }) => {
  if (loggingIn) {
    return (<div>Loading...</div>);
  }
  if (!loggingIn && !loggedIn && !silent) {
    return (<Login />);
  }
  if (loggedIn && !allowed && !silent) {
    return (<div>Access denied</div>);
  }
  if (allowed) {
    return (<div>{children}</div>);
  }

  return null;
};

AuthEnsureRole.propTypes = {
  loggingIn: React.PropTypes.bool,
  loggedIn: React.PropTypes.bool,
  allowed: React.PropTypes.bool,
  silent: React.PropTypes.bool,
  children: React.PropTypes.node,
};

export default AuthEnsureRole;
