/* eslint consistent-return: 0 */

export default {
  forgotPassword({ LocalState, Accounts }, email) {
    if (!email) {
      return LocalState.set('FORGOT_PASSWORD_ERROR', 'Email is required');
    }

    Accounts.forgotPassword({ email }, (error) => {
      if (error) {
        return LocalState.set('FORGOT_PASSWORD_ERROR', error.reason);
      }
      return LocalState.set('FORGOT_PASSWORD_SUCCESS', 'Please, check your email inbox');
    });
  },

  clearErrors({ LocalState }) {
    return [
      LocalState.set('FORGOT_PASSWORD_ERROR', null),
      LocalState.set('FORGOT_PASSWORD_SUCCESS', null),
    ];
  },
};
