import React from 'react';

class SignUp extends React.Component {
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
    const { error } = this.props;

    return (
      <div className="sign-up">
        <h2>Sign up</h2>
        {error ? <p>{error}</p> : null}
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
      </div>
    );
  }
}

SignUp.propTypes = {
  signUp: React.PropTypes.func,
  error: React.PropTypes.string,
};

export default SignUp;
