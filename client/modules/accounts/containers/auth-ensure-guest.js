import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import authComposer from '../libs/auth-composer';
import AuthEnsureGuest from '../components/auth-ensure-guest';

const composer = ({ context, loggedIn, loggedInRoute }, onData) => {
  const { FlowRouter } = context();
  if (loggedIn && loggedInRoute) {
    // Go to loggedInRoute without pollute the browser history in order to avoid loops
    // when you hit the back button of the browser...
    FlowRouter.withReplaceState(() => {
      FlowRouter.go(loggedInRoute);
    });
  }
  onData(null, {});
};

export const depsMapper = context => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  composeWithTracker(authComposer),
  useDeps(depsMapper),
)(AuthEnsureGuest);
