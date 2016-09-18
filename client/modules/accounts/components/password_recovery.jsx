import React from 'react';

class PasswordRecovery extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { sendPasswordRecoveryEmail } = this.props;
    const { email } = this;

    sendPasswordRecoveryEmail(email.value);
  }

  render() {
    const { error, success } = this.props;

    return (
      <div className="password-recovery">
        <h2>Send reset password link</h2>
        {error && <p>{error}</p>}
        {!error && success && <p>{success}</p>}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">
            <span>Email</span>
            <input ref={(node) => { this.email = node; }} id="email" type="text" />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

PasswordRecovery.propTypes = {
  sendPasswordRecoveryEmail: React.PropTypes.func,
  error: React.PropTypes.string,
  success: React.PropTypes.string,
};

export default PasswordRecovery;
