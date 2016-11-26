import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import SetPassword from '../components/set-password';

export const composer = ({ context, clearErrors, token }, onData) => {
  const { FlowRouter, LocalState } = context();
  const error = LocalState.get('SET_PASSWORD_ERROR');
  const success = LocalState.get('SET_PASSWORD_SUCCESS');
  const successLink = FlowRouter.path('accounts.profile');
  onData(null, { token, error, success, successLink });

  // Clear errors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  setPassword: actions.setPassword.setPassword,
  clearErrors: actions.setPassword.clearErrors,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper),
)(SetPassword);
