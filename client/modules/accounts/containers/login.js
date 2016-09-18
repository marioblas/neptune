import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Login from '../components/login';

export const composer = ({ context, clearErrors }, onData) => {
  const { Meteor, FlowRouter, LocalState } = context();
  const appName = Meteor.settings.public.appName;
  const signUpPath = FlowRouter.path('signUp');
  const error = LocalState.get('LOGIN_ERROR');
  onData(null, { appName, signUpPath, error });

  // Clear errors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  logIn: actions.login.logIn,
  clearErrors: actions.login.clearErrors,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Login);
