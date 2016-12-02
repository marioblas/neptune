import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import SignUp from '../components/sign-up';

export const composer = ({ context, clearLocalStates }, onData) => {
  const { LocalState } = context();
  const error = LocalState.get('SIGN_UP_ERROR');
  onData(null, { error });

  // Clear local states when unmounting the component
  return clearLocalStates;
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  signUp: actions.signUp.signUp,
  clearLocalStates: actions.signUp.clearLocalStates,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper),
)(SignUp);
