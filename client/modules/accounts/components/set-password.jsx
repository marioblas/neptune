import React from 'react';

class SetPassword extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { setPassword, token } = this.props;
    const { newPassword, confirmPassword } = this;

    setPassword(token, newPassword.value, confirmPassword.value);
  }

  render() {
    const { error, success, successLink } = this.props;

    return (
      <div className="set-password">
        <h2>Set password</h2>
        {/* Error */}
        {!success && error && <p>{error}</p>}
        {/* Success or Form */}
        {success ?
          <div className="set-password-success">
            <p>{success}</p>
            <a href={successLink}>Continue</a>
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

SetPassword.propTypes = {
  setPassword: React.PropTypes.func,
  token: React.PropTypes.string,
  error: React.PropTypes.string,
  success: React.PropTypes.string,
  successLink: React.PropTypes.string,
};

export default SetPassword;
