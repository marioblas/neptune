export default {
  verifyEmail({ LocalState, Accounts }, token) {
    Accounts.verifyEmail(token, (error) => {
      if (error) {
        return LocalState.set('VERIFY_EMAIL_ERROR', error.reason);
      }
      return LocalState.set('VERIFY_EMAIL_SUCCESS', 'Your email has been verified');
    });
  },

  clearErrors({ LocalState }) {
    return [
      LocalState.set('VERIFY_EMAIL_ERROR', null),
      LocalState.set('VERIFY_EMAIL_SUCCESS', null),
    ];
  },
};
