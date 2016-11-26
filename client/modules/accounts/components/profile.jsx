import React from 'react';

const Profile = ({ username, email }) => (
  <div className="profile">
    <h2>Profile</h2>
    <h3>@{username}</h3>
    <p>{email}</p>
  </div>
);

Profile.propTypes = {
  username: React.PropTypes.string,
  email: React.PropTypes.string,
};

export default Profile;
