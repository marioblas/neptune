import React from 'react';

class Register extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { registerAction } = this.props;
    const { username, email, password } = this.refs;

    const options = {
      username: username.value,
      email: email.value,
      password: password.value,
    };

    registerAction(options);
  }

  render() {
    const { error } = this.props;

    return (
      <div className="register">
        <h2>Register</h2>
        {error ? <p>{error}</p> : null}
        <form onSubmit={this.handleSubmit}>
          <label>
            <span>Username</span>
            <input ref="username" type="text" />
          </label>
          <label>
            <span>Email</span>
            <input ref="email" type="text" />
          </label>
          <label>
            <span>Password</span>
            <input ref="password" type="password" />
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  registerAction: React.PropTypes.func,
  error: React.PropTypes.string,
};

export default Register;
