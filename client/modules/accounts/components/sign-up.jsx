import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import H1 from '/client/ui/h1';
import AuthEnsureGuest from '../containers/auth-ensure-guest';

class SignUp extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { signUp } = this.props;
    const { username, email, password } = this;

    const options = {
      username: username.value,
      email: email.value,
      password: password.value,
    };

    signUp(options);
  }

  render() {
    const { logInPath, error } = this.props;

    return (
      <AuthEnsureGuest>
        <div className="sign-up">
          <Helmet>
            <title>Sign up</title>
          </Helmet>
          <H1>Sign up</H1>
          {/* Error */}
          {error && <p>{error}</p>}
          {/* Form */}
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="username">
              <span>Username</span>
              <input
                ref={(node) => { this.username = node; }}
                id="username"
                type="text"
                required
              />
            </label>
            <label htmlFor="email">
              <span>Email</span>
              <input
                ref={(node) => { this.email = node; }}
                id="email"
                type="email"
                required
              />
            </label>
            <label htmlFor="password">
              <span>Password</span>
              <input
                ref={(node) => { this.password = node; }}
                id="password"
                type="password"
                required
              />
            </label>
            <button type="submit">Sign up</button>
          </form>
          <div>
            <p>Already signed up? <a href={logInPath}>Log in</a>.</p>
          </div>
        </div>
      </AuthEnsureGuest>
    );
  }
}

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
  logInPath: PropTypes.string.isRequired,
  error: PropTypes.string,
};

SignUp.defaultProps = {
  error: '',
};

export default SignUp;
