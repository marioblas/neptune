import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import H1 from '/client/ui/h1';
import AuthEnsureGuest from '../containers/auth-ensure-guest';

class ForgotPassword extends Component {
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
    const { error, success, successPath } = this.props;

    return (
      <AuthEnsureGuest>
        <div className="forgot-password">
          <Helmet title="Forgot password" />
          <H1>Forgot password</H1>
          {/* Error */}
          {!success && error && <p>{error}</p>}
          {/* Success or Form */}
          {success ?
            <div className="forgot-password-success">
              <p>{success}</p>
              <a href={successPath}>Return to login</a>
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
      </AuthEnsureGuest>
    );
  }
}

ForgotPassword.propTypes = {
  forgotPassword: PropTypes.func.isRequired,
  successPath: PropTypes.string.isRequired,
  error: PropTypes.string,
  success: PropTypes.string,
};

ForgotPassword.defaultProps = {
  error: '',
  success: '',
};

export default ForgotPassword;
