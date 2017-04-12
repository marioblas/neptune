import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import H1 from '/client/ui/h1';
import AuthEnsureGuest from '../containers/auth-ensure-guest';

class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { logIn } = this.props;
    const { identifier, password } = this;

    logIn(identifier.value, password.value);
  }

  render() {
    const { signUpPath, forgotPasswordPath, loggedInRoute, error } = this.props;

    return (
      <AuthEnsureGuest loggedInRoute={loggedInRoute}>
        <div className="login">
          <Helmet>
            <title>Login</title>
          </Helmet>
          <H1>Login</H1>
          {/* Error */}
          {error && <p>{error}</p>}
          {/* Form */}
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="identifier">
              <span>Username or email</span>
              <input
                ref={(node) => { this.identifier = node; }}
                id="identifier"
                type="text"
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
              <a href={forgotPasswordPath}>Forgot password?</a>
            </label>
            <button type="submit">Log in</button>
          </form>

          {signUpPath &&
            <div>
              <p>Not signed up yet? <a href={signUpPath}>Create an account</a>.</p>
            </div>
          }
        </div>
      </AuthEnsureGuest>
    );
  }
}

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
  forgotPasswordPath: PropTypes.string.isRequired,
  signUpPath: PropTypes.string,
  loggedInRoute: PropTypes.string,
  error: PropTypes.string,
};

Login.defaultProps = {
  signUpPath: '',
  loggedInRoute: '',
  error: '',
};

export default Login;
