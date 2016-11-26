import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import ForgotPassword from '../components/forgot-password';

export const composer = ({ context, clearErrors }, onData) => {
  const { LocalState } = context();
  const error = LocalState.get('FORGOT_PASSWORD_ERROR');
  const success = LocalState.get('FORGOT_PASSWORD_SUCCESS');
  onData(null, { error, success });

  // Clear errors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  forgotPassword: actions.forgotPassword.forgotPassword,
  clearErrors: actions.forgotPassword.clearErrors,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper),
)(ForgotPassword);
