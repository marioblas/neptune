/* eslint consistent-return: 0 */

export default {
  signUp({ Meteor, LocalState, FlowRouter, Accounts }, options) {
    const { username, email, password } = options;
    if (!username || !email || !password) {
      return LocalState.set('SIGNUP_ERROR', 'username, email and password are required');
    }

    LocalState.set('SIGNUP_ERROR', null);

    Accounts.createUser({ username, email, password }, (error) => {
      if (error) {
        return LocalState.set('SIGNUP_ERROR', error.reason);
      }
    });
  },
};
