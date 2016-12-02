import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Login from '../components/login';

export const composer = ({ context, clearLocalStates }, onData) => {
  const { Meteor, FlowRouter, LocalState } = context();
  const appName = Meteor.settings.public.appName;
  const signUpPath = FlowRouter.path('accounts.signUp');
  const error = LocalState.get('LOGIN_ERROR');
  onData(null, { appName, signUpPath, error });

  // Clear local states when unmounting the component
  return clearLocalStates;
};

export const depsMapper = (context, actions) => ({
  context: () => context,
  logIn: actions.login.logIn,
  clearLocalStates: actions.login.clearLocalStates,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper),
)(Login);
