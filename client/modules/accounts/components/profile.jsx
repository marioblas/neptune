import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import H1 from '/client/ui/h1';
import AuthEnsureUser from '../containers/auth-ensure-user';

const Profile = ({ username, email }) => (
  <AuthEnsureUser>
    <div className="profile">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <H1>Profile</H1>
      {username && <h3>@{username}</h3>}
      <p>{email}</p>
    </div>
  </AuthEnsureUser>
);

Profile.propTypes = {
  email: PropTypes.string.isRequired,
  username: PropTypes.string,
};

Profile.defaultProps = {
  username: '',
};

export default Profile;
