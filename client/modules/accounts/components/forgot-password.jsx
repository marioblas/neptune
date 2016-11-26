import React from 'react';

class ForgotPassword extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { forgotPassword } = this.props;
    const { email } = this;

    forgotPassword(email.value);
  }

  render() {
    const { error, success, successLink } = this.props;

    return (
      <div className="forgot-password">
        <h2>Forgot password</h2>
        {/* Error */}
        {!success && error && <p>{error}</p>}
        {/* Success or Form */}
        {success ?
          <div className="forgot-password-success">
            <p>{success}</p>
            <a href={successLink}>Return to login</a>
          </div>
          :
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="email">
              <span>Email</span>
              <input ref={(node) => { this.email = node; }} id="email" type="email" required />
            </label>
            <button type="submit">Send reset link</button>
          </form>
        }
      </div>
    );
  }
}

ForgotPassword.propTypes = {
  forgotPassword: React.PropTypes.func,
  error: React.PropTypes.string,
  success: React.PropTypes.string,
  successLink: React.PropTypes.string,
};

export default ForgotPassword;
