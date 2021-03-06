/* eslint consistent-return: 0 */

export default {
  changePassword({ LocalState, Accounts }, oldPassword, newPassword, confirmPassword) {
    if (!oldPassword || !newPassword || !confirmPassword) {
      return LocalState.set('CHANGE_PASSWORD_ERROR', 'All passwords fields are required');
    }
    if (newPassword !== confirmPassword) {
      return LocalState.set('CHANGE_PASSWORD_ERROR', 'New passwords do not match');
    }

    Accounts.changePassword(oldPassword, newPassword, (error) => {
      if (error) {
        return LocalState.set('CHANGE_PASSWORD_ERROR', error.reason);
      }
      return LocalState.set('CHANGE_PASSWORD_SUCCESS', 'Your password has been updated successfully');
    });
  },

  clearLocalStates({ LocalState }) {
    return [
      LocalState.set('CHANGE_PASSWORD_ERROR', null),
      LocalState.set('CHANGE_PASSWORD_SUCCESS', null),
    ];
  },
};
