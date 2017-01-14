import React from 'react';
import AuthEnsureUser from '../containers/auth-ensure-user';

const Profile = ({ username, email }) => (
  <AuthEnsureUser>
    <div className="profile">
      <h2>Profile</h2>
      {username && <h3>@{username}</h3>}
      <p>{email}</p>
    </div>
  </AuthEnsureUser>
);

Profile.propTypes = {
  email: React.PropTypes.string.isRequired,
  username: React.PropTypes.string,
};

Profile.defaultProps = {
  username: '',
};

export default Profile;
