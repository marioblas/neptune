import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Profile from '../components/profile';

export const composer = ({ context }, onData) => {
  const { Meteor, FlowRouter } = context();
  const user = Meteor.user();

  if (!user && !Meteor.loggingIn()) {
    FlowRouter.go('accounts.login');
  }

  if (user) {
    const { username, emails } = Meteor.user();
    onData(null, { username, email: emails[0].address });
  }
};

export const depsMapper = context => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper),
)(Profile);
