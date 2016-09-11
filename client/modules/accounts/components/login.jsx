import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { logInAction } = this.props;
    const { identifier, password } = this;

    logInAction(identifier.value, password.value);
  }

  render() {
    const { error } = this.props;

    return (
      <div className="login">
        <h2>Login</h2>
        {error ? <p>{error}</p> : null}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="identifier">
            <span>Username or email</span>
            <input ref={node => { this.identifier = node; }} id="identifier" type="text" />
          </label>
          <label htmlFor="password">
            <span>Password</span>
            <input ref={node => { this.password = node; }} id="password" type="password" />
          </label>
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  logInAction: React.PropTypes.func,
  error: React.PropTypes.string,
};

export default Login;
