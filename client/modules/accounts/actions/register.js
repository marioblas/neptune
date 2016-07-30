/* eslint consistent-return: 0 */

export default {
  register({ Meteor, LocalState, FlowRouter, Accounts }, options) {
    const { username, email, password } = options;
    if (!username || !email || !password) {
      return LocalState.set('REGISTER_ERROR', 'username, email and password are required');
    }

    LocalState.set('REGISTER_ERROR', null);

    Accounts.createUser({ username, email, password }, (error) => {
      if (error) {
        return LocalState.set('REGISTER_ERROR', error.reason);
      }
    });
  },
};
