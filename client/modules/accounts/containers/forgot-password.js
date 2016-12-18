import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import ForgotPassword from '../components/forgot-password';

export const composer = ({ context, clearLocalStates }, onData) => {
  const { FlowRouter, LocalState } = context();
  const error = LocalState.get('FORGOT_PASSWORD_ERROR');
  const success = LocalState.get('FORGOT_PASSWORD_SUCCESS');
  const successPath = FlowRouter.path('accounts.login');
  onData(null, { error, success, successPath });

  // Clear local states when unmounting the component
  return clearLocalStates;
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  forgotPassword: actions.forgotPassword.forgotPassword,
  clearLocalStates: actions.forgotPassword.clearLocalStates,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper),
)(ForgotPassword);
