import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import VerifyEmail from '../components/verify-email';

export const composer = ({ context, clearErrors, verifyEmail, token }, onData) => {
  const { FlowRouter, LocalState } = context();
  verifyEmail(token);
  const error = LocalState.get('VERIFY_EMAIL_ERROR');
  const success = LocalState.get('VERIFY_EMAIL_SUCCESS');
  const successLink = FlowRouter.path('home');
  onData(null, { error, success, successLink });

  // Clear errors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  verifyEmail: actions.verifyEmail.verifyEmail,
  clearErrors: actions.verifyEmail.clearErrors,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper),
)(VerifyEmail);
