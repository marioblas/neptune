import React from 'react';
import AuthEnsureUser from '../containers/auth-ensure-user';

class ChangePassword extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { changePassword } = this.props;
    const { oldPassword, newPassword, confirmPassword } = this;

    changePassword(oldPassword.value, newPassword.value, confirmPassword.value);
  }

  render() {
    const { error, success } = this.props;

    return (
      <AuthEnsureUser>
        <div className="change-password">
          <h2>Change password</h2>
          {/* Error */}
          {!success && error && <p>{error}</p>}
          {/* Success */}
          {success && <p>{success}</p>}
          {/* Form */}
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="oldPassword">
              <span>Old password</span>
              <input
                ref={(node) => { this.oldPassword = node; }}
                id="oldPassword"
                type="password"
                required
              />
            </label>
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
            <button type="submit">Change password</button>
          </form>
        </div>
      </AuthEnsureUser>
    );
  }
}

ChangePassword.propTypes = {
  changePassword: React.PropTypes.func,
  error: React.PropTypes.string,
  success: React.PropTypes.string,
};

export default ChangePassword;
