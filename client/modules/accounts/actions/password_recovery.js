/* eslint consistent-return: 0 */

export default {
  sendPasswordRecoveryEmail({ Meteor, LocalState }, email) {
    if (!email) {
      return LocalState.set('PASSWORD_RECOVERY_ERROR', 'email is required');
    }

    LocalState.set('PASSWORD_RECOVERY_ERROR', null);

    Meteor.call('accounts.sendPasswordRecoveryEmail', email, (error) => {
      if (error) {
        return LocalState.set('PASSWORD_RECOVERY_ERROR', error.reason);
      }
      return LocalState.set('PASSWORD_RECOVERY_SUCCESS', 'check your inbox');
    });
  },

  clearErrors({ LocalState }) {
    LocalState.set('PASSWORD_RECOVERY_ERROR', null);
    LocalState.set('PASSWORD_RECOVERY_SUCCESS', null);
  },
};
