import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import VerifyEmail from '../components/verify-email';

export const composer = ({ context, clearLocalStates, verifyEmail, token }, onData) => {
  const { FlowRouter, LocalState } = context();
  verifyEmail(token);
  const error = LocalState.get('VERIFY_EMAIL_ERROR');
  const success = LocalState.get('VERIFY_EMAIL_SUCCESS');
  const successLink = FlowRouter.path('home');
  onData(null, { error, success, successLink });

  // Clear local states when unmounting the component
  return clearLocalStates;
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  verifyEmail: actions.verifyEmail.verifyEmail,
  clearLocalStates: actions.verifyEmail.clearLocalStates,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper),
)(VerifyEmail);
