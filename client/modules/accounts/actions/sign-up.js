/* eslint consistent-return: 0 */

export default {
  signUp({ Meteor, LocalState, FlowRouter, Accounts }, options) {
    const { username, email, password } = options;
    if (!username || !email || !password) {
      return LocalState.set('SIGN_UP_ERROR', 'Username, email and password are required');
    }

    LocalState.set('SIGN_UP_ERROR', null);

    Accounts.createUser({ username, email, password }, (error) => {
      if (error) {
        return LocalState.set('SIGN_UP_ERROR', error.reason);
      }
    });
  },

  clearLocalStates({ LocalState }) {
    return LocalState.set('SIGN_UP_ERROR', null);
  },
};
