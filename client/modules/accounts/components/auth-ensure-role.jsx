/* eslint max-len: 0 */

import React from 'react';
import Login from '../containers/login';

const AuthEnsureRole = ({ loggingIn, loggedIn, allowed, children, silent, loggingInComp, notLoggedInComp, notAllowedComp }) => {
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
  loggedIn: React.PropTypes.bool.isRequired,
  children: React.PropTypes.node.isRequired,
  allowed: React.PropTypes.bool,
  silent: React.PropTypes.bool,
  loggingInComp: React.PropTypes.node,
  notLoggedInComp: React.PropTypes.node,
  notAllowedComp: React.PropTypes.node,
};

AuthEnsureRole.defaultProps = {
  loggingIn: false,
  allowed: undefined,
  silent: false,
  loggingInComp: <div>Loading...</div>,
  notLoggedInComp: <Login />,
  notAllowedComp: <div>Access denied</div>,
};

export default AuthEnsureRole;
