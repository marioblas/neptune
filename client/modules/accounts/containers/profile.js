import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Profile from '../components/profile';

export const composer = ({ context }, onData) => {
  const { Meteor } = context();
  const data = {};
  const user = Meteor.user();

  if (user) {
    const { username, emails } = user;
    Object.assign(data, { username, email: emails[0].address });
  }
  onData(null, data);
};

export const depsMapper = context => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper),
)(Profile);
