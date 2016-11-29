import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import authComposer from '../libs/auth-composer';
import AuthEnsureUser from '../components/auth-ensure-user';

export const depsMapper = context => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(authComposer),
  useDeps(depsMapper),
)(AuthEnsureUser);
