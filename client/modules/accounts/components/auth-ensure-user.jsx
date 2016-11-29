import React from 'react';

const AuthEnsureUser = ({ loggingIn, loggedIn, children }) => (
  <div>
    {loggingIn && <div>Loading...</div>}
    {!loggingIn && !loggedIn && <div>Please log in</div>}
    {loggedIn && children}
  </div>
);

AuthEnsureUser.propTypes = {
  loggingIn: React.PropTypes.bool,
  loggedIn: React.PropTypes.bool,
  children: React.PropTypes.element,
};

export default AuthEnsureUser;
