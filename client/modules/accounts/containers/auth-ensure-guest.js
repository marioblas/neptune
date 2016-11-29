import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import AuthEnsureGuest from '../components/auth-ensure-guest';
import authComposer from '../libs/auth-composer';

export const depsMapper = context => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(authComposer),
  useDeps(depsMapper),
)(AuthEnsureGuest);
