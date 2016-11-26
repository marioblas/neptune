import React from 'react';

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
    const { appName, signUpPath, error } = this.props;

    return (
      <div className="login">
        <h2>Login</h2>
        {error ? <p>{error}</p> : null}
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
          </label>
          <button type="submit">Log in</button>
        </form>
        <div>
          <p>New on {appName}? <a href={signUpPath}>Create an account</a>.</p>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  logIn: React.PropTypes.func,
  appName: React.PropTypes.string,
  signUpPath: React.PropTypes.string,
  error: React.PropTypes.string,
};

export default Login;
