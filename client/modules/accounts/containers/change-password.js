import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import ChangePassword from '../components/change-password';

export const composer = ({ context, clearLocalStates }, onData) => {
  const { LocalState } = context();
  const error = LocalState.get('CHANGE_PASSWORD_ERROR');
  const success = LocalState.get('CHANGE_PASSWORD_SUCCESS');
  onData(null, { error, success });

  // Clear local states when unmounting the component
  return clearLocalStates;
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  changePassword: actions.changePassword.changePassword,
  clearLocalStates: actions.changePassword.clearLocalStates,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper),
)(ChangePassword);
