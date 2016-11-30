import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import ChangePassword from '../components/change-password';

export const composer = ({ context, clearErrors }, onData) => {
  const { LocalState } = context();
  const error = LocalState.get('CHANGE_PASSWORD_ERROR');
  const success = LocalState.get('CHANGE_PASSWORD_SUCCESS');
  onData(null, { error, success });

  // Clear errors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  changePassword: actions.changePassword.changePassword,
  clearErrors: actions.changePassword.clearErrors,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper),
)(ChangePassword);
