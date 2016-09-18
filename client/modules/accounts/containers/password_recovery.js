import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import PasswordRecovery from '../components/password_recovery';

export const composer = ({ context, clearErrors }, onData) => {
  const { LocalState } = context();
  const error = LocalState.get('PASSWORD_RECOVERY_ERROR');
  const success = LocalState.get('PASSWORD_RECOVERY_SUCCESS');
  onData(null, { error, success });

  // Clear errors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  sendPasswordRecoveryEmail: actions.passwordRecovery.sendPasswordRecoveryEmail,
  clearErrors: actions.passwordRecovery.clearErrors,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(PasswordRecovery);
