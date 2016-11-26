export default {
  forgotPassword({ LocalState, Accounts }, email) {
    Accounts.forgotPassword({ email }, (error) => {
      if (error) {
        return LocalState.set('FORGOT_PASSWORD_ERROR', error.reason);
      }
      return LocalState.set('FORGOT_PASSWORD_SUCCESS', 'Please, check your email inbox.');
    });
  },

  clearErrors({ LocalState }) {
    return [
      LocalState.set('FORGOT_PASSWORD_ERROR', null),
      LocalState.set('FORGOT_PASSWORD_SUCCESS', null),
    ];
  },
};
