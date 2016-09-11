import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import SignUp from '../components/signup';

export const composer = ({ context, clearErrors }, onData) => {
  const { LocalState } = context();
  const error = LocalState.get('SIGNUP_ERROR');
  onData(null, { error });

  // Clear errors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  signUp: actions.signUp.signUp,
  clearErrors: actions.signUp.clearErrors,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SignUp);
