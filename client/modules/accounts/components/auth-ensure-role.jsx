/* eslint max-len: 0 */

import React, { PropTypes } from 'react';
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
  loggingIn: PropTypes.bool,
  loggedIn: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  allowed: PropTypes.bool,
  silent: PropTypes.bool,
  loggingInComp: PropTypes.node,
  notLoggedInComp: PropTypes.node,
  notAllowedComp: PropTypes.node,
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
