import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { loginAction } = this.props;
    const { identifier, password } = this.refs;

    loginAction(identifier.value, password.value);
  }

  render() {
    const { error } = this.props;

    return (
      <div className="login">
        <h2>Login</h2>
        {error ? <p>{error}</p> : null}
        <form onSubmit={this.handleSubmit}>
          <label>
            <span>Username or email</span>
            <input ref="identifier" type="text" />
          </label>
          <label>
            <span>Password</span>
            <input ref="password" type="password" />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  loginAction: React.PropTypes.func,
  error: React.PropTypes.string,
};

export default Login;
