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
    const { error, success } = this.props;

    return (
      <div className="forgot-password">
        <h2>Forgot password</h2>
        {!success && error && <p>{error}</p>}
        {success && <p>{success}</p>}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">
            <span>Email</span>
            <input ref={(node) => { this.email = node; }} id="email" type="email" required />
          </label>
          <button type="submit">Send reset link</button>
        </form>
      </div>
    );
  }
}

ForgotPassword.propTypes = {
  forgotPassword: React.PropTypes.func,
  error: React.PropTypes.string,
  success: React.PropTypes.string,
};

export default ForgotPassword;
