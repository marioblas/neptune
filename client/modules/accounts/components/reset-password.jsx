import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import H1 from '/client/ui/h1';

class ResetPassword extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { resetPassword, token } = this.props;
    const { newPassword, confirmPassword } = this;

    resetPassword(token, newPassword.value, confirmPassword.value);
  }

  render() {
    const { error, success, successPath } = this.props;

    return (
      <div className="set-password">
        <Helmet title="Set password" />
        <H1>Set password</H1>
        {/* Error */}
        {!success && error && <p>{error}</p>}
        {/* Success or Form */}
        {success ?
          <div className="set-password-success">
            <p>{success}</p>
            {successPath && <a href={successPath}>Continue</a>}
          </div>
          :
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="newPassword">
              <span>New password</span>
              <input
                ref={(node) => { this.newPassword = node; }}
                id="newPassword"
                type="password"
                required
              />
            </label>
            <label htmlFor="confirmPassword">
              <span>Repeat password</span>
              <input
                ref={(node) => { this.confirmPassword = node; }}
                id="confirmPassword"
                type="password"
                required
              />
            </label>
            <button type="submit">Set password</button>
          </form>
        }
      </div>
    );
  }
}

ResetPassword.propTypes = {
  resetPassword: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  error: PropTypes.string,
  success: PropTypes.string,
  successPath: PropTypes.string,
};

ResetPassword.defaultProps = {
  error: '',
  success: '',
  successPath: '',
};

export default ResetPassword;
