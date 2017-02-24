import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import authComposer from '../libs/auth-composer';
import AuthEnsureRole from '../components/auth-ensure-role';

const composer = ({ context, loggedIn, roles }, onData) => {
  const { Meteor, Roles } = context();
  const data = {};

  if (loggedIn && roles) {
    const allowed = Roles.userIsInRole(Meteor.userId(), roles);
    Object.assign(data, { allowed });
  }
  onData(null, data);
};

export const depsMapper = context => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  composeWithTracker(authComposer),
  useDeps(depsMapper),
)(AuthEnsureRole);
