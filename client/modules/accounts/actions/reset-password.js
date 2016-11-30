/* eslint consistent-return: 0 */

export default {
  resetPassword({ LocalState, Accounts }, token, newPassword, confirmPassword) {
    if (!newPassword || !confirmPassword) {
      return LocalState.set('RESET_PASSWORD_ERROR', 'Both password fields are required');
    }
    if (newPassword !== confirmPassword) {
      return LocalState.set('RESET_PASSWORD_ERROR', 'Passwords do not match');
    }

    Accounts.resetPassword(token, newPassword, (error) => {
      if (error) {
        return LocalState.set('RESET_PASSWORD_ERROR', error.reason);
      }
      return LocalState.set('RESET_PASSWORD_SUCCESS', 'Your password has been updated successfully');
    });
  },

  clearErrors({ LocalState }) {
    return [
      LocalState.set('RESET_PASSWORD_ERROR', null),
      LocalState.set('RESET_PASSWORD_SUCCESS', null),
    ];
  },
};
