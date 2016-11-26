import React from 'react';

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
      <div className="change-password">
        <h2>Change password</h2>
        <form onSubmit={this.handleSubmit}>

          {/* Success */}
          {success && <p>{success}</p>}

          {/* Error */}
          {!success && error && <p>{error}</p>}

          <label htmlFor="oldPassword">
            <span>Old password</span>
            <input
              ref={(node) => { this.oldPassword = node; }}
              id="oldPassword"
              type="password"
            />
          </label>
          <label htmlFor="newPassword">
            <span>New password</span>
            <input
              ref={(node) => { this.newPassword = node; }}
              id="newPassword"
              type="password"
            />
          </label>
          <label htmlFor="confirmPassword">
            <span>Repeat password</span>
            <input
              ref={(node) => { this.confirmPassword = node; }}
              id="confirmPassword"
              type="password"
            />
          </label>
          <button className="button" type="submit">Change password</button>
        </form>
      </div>
    );
  }
}

ChangePassword.propTypes = {
  changePassword: React.PropTypes.func,
  error: React.PropTypes.string,
  success: React.PropTypes.string,
};

export default ChangePassword;
