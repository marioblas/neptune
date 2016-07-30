import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Register from '../components/register';

export const composer = ({ context, clearErrors }, onData) => {
  const { LocalState } = context();
  const error = LocalState.get('REGISTER_ERROR');
  onData(null, { error });

  // Clear errors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  registerAction: actions.register.register,
  clearErrors: actions.register.clearErrors,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Register);
