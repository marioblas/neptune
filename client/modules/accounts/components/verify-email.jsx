import React from 'react';

const VerifyEmail = ({ error, success, successPath }) => (
  <div className="verify-email">
    <h2>Verify email</h2>
    {/* Loading... */}
    {!success && !error && <p>Verifying your email, this will take just a moment...</p>}
    {/* Error */}
    {!success && error && <p>{error}</p>}
    {/* Success */}
    {success &&
      <div className="verify-email-success">
        <p>{success}</p>
        <a href={successPath}>Continue</a>
      </div>
    }
  </div>
);

VerifyEmail.propTypes = {
  error: React.PropTypes.string,
  success: React.PropTypes.bool,
  successPath: React.PropTypes.string,
};

export default VerifyEmail;
