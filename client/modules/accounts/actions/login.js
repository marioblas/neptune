/* eslint consistent-return: 0 */

export default {
  logIn({ Meteor, LocalState, FlowRouter }, identifier, password) {
    if (!identifier || !password) {
      return LocalState.set('LOGIN_ERROR', 'Username or email & password are required');
    }

    LocalState.set('LOGIN_ERROR', null);

    Meteor.loginWithPassword(identifier, password, (error) => {
      if (error) {
        return LocalState.set('LOGIN_ERROR', error.reason);
      }
      FlowRouter.go('home');
    });
  },

  clearErrors({ LocalState }) {
    return LocalState.set('LOGIN_ERROR', null);
  },
};
