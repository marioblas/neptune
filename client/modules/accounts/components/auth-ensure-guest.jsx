import React from 'react';

const AuthEnsureGuest = ({ loggingIn, loggedIn, children }) => (
  <div>
    {loggingIn && <div>Loading...</div>}
    {!loggingIn && loggedIn && <div>You are already logged in</div>}
    {!loggedIn && children}
  </div>
);

AuthEnsureGuest.propTypes = {
  loggingIn: React.PropTypes.bool,
  loggedIn: React.PropTypes.bool,
  children: React.PropTypes.node,
};

export default AuthEnsureGuest;
