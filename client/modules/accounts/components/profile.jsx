import React from 'react';
import AuthEnsureUser from '../containers/auth-ensure-user';

const Profile = ({ username, email }) => (
  <AuthEnsureUser>
    <div className="profile">
      <h2>Profile</h2>
      <h3>@{username}</h3>
      <p>{email}</p>
    </div>
  </AuthEnsureUser>
);

Profile.propTypes = {
  username: React.PropTypes.string,
  email: React.PropTypes.string,
};

export default Profile;
