import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import authComposer from '../libs/auth-composer';
import AuthEnsureGuest from '../components/auth-ensure-guest';

export const depsMapper = context => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(authComposer),
  useDeps(depsMapper),
)(AuthEnsureGuest);
