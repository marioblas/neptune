import React from 'react';

class ResetPassword extends React.Component {
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
        <h2>Set password</h2>
        {/* Error */}
        {!success && error && <p>{error}</p>}
        {/* Success or Form */}
        {success ?
          <div className="set-password-success">
            <p>{success}</p>
            <a href={successPath}>Continue</a>
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
  resetPassword: React.PropTypes.func,
  token: React.PropTypes.string,
  error: React.PropTypes.string,
  success: React.PropTypes.string,
  successPath: React.PropTypes.string,
};

export default ResetPassword;
