import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import ResetPassword from '../components/reset-password';

export const composer = ({ context, clearLocalStates, token }, onData) => {
  const { FlowRouter, LocalState } = context();
  const error = LocalState.get('RESET_PASSWORD_ERROR');
  const success = LocalState.get('RESET_PASSWORD_SUCCESS');
  const successLink = FlowRouter.path('accounts.profile');
  onData(null, { token, error, success, successLink });

  // Clear local states when unmounting the component
  return clearLocalStates;
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  resetPassword: actions.resetPassword.resetPassword,
  clearLocalStates: actions.resetPassword.clearLocalStates,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper),
)(ResetPassword);
