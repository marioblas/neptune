import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Profile from '../components/profile';

export const composer = ({ context }, onData) => {
  const { Meteor } = context();
  const user = Meteor.user();

  if (user) {
    const { username, emails } = user;
    onData(null, { username, email: emails[0].address });
  } else {
    onData(null, {});
  }
};

export const depsMapper = context => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper),
)(Profile);
