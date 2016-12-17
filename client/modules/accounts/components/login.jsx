import React from 'react';
import AuthEnsureGuest from '../containers/auth-ensure-guest';

class Login extends React.Component {
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
          <h2>Login</h2>
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
          <div>
            <p>Not signed up yet? <a href={signUpPath}>Create an account</a>.</p>
          </div>
        </div>
      </AuthEnsureGuest>
    );
  }
}

Login.propTypes = {
  logIn: React.PropTypes.func,
  signUpPath: React.PropTypes.string,
  forgotPasswordPath: React.PropTypes.string,
  loggedInRoute: React.PropTypes.string,
  error: React.PropTypes.string,
};

export default Login;
