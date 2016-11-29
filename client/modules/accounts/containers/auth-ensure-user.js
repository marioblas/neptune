import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import AuthEnsureUser from '../components/auth-ensure-user';
import authComposer from '../libs/auth-composer';

export const depsMapper = context => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(authComposer),
  useDeps(depsMapper),
)(AuthEnsureUser);
