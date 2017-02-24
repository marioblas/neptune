import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import H1 from '/client/ui/h1';

const VerifyEmail = ({ error, success, successPath }) => (
  <div className="verify-email">
    <Helmet title="Verify email" />
    <H1>Verify email</H1>
    {/* Loading... */}
    {!success && !error && <p>Verifying your email, this will take just a moment...</p>}
    {/* Error */}
    {!success && error && <p>{error}</p>}
    {/* Success */}
    {success &&
      <div className="verify-email-success">
        <p>{success}</p>
        {successPath && <a href={successPath}>Continue</a>}
      </div>
    }
  </div>
);

VerifyEmail.propTypes = {
  error: PropTypes.string,
  success: PropTypes.string,
  successPath: PropTypes.string,
};

VerifyEmail.defaultProps = {
  error: '',
  success: '',
  successPath: '',
};

export default VerifyEmail;
