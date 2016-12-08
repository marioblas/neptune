/* eslint max-len: 0 */

import React from 'react';
import Login from '../containers/login';

const AuthEnsureRole = ({ loggingIn, loggedIn, allowed, silent, loggingInComp, notLoggedInComp, notAllowedComp, children }) => {
  if (loggingIn) {
    return loggingInComp;
  }
  if (!loggedIn && !silent) {
    return notLoggedInComp;
  }
  if (!allowed && !silent) {
    return notAllowedComp;
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
  loggingInComp: React.PropTypes.node,
  notLoggedInComp: React.PropTypes.node,
  notAllowedComp: React.PropTypes.node,
  children: React.PropTypes.node,
};

AuthEnsureRole.defaultProps = {
  loggingInComp: <div>Loading...</div>,
  notLoggedInComp: <Login />,
  notAllowedComp: <div>Access denied</div>,
};

export default AuthEnsureRole;
