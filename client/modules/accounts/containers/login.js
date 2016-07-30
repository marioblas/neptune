import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Login from '../components/login';

export const composer = ({ context, clearErrors }, onData) => {
  const { LocalState } = context();
  const error = LocalState.get('LOGIN_ERROR');
  onData(null, { error });

  // Clear errors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  loginAction: actions.login.login,
  clearErrors: actions.login.clearErrors,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Login);
