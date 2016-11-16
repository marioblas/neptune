import { useDeps, composeWithTracker, composeAll } from 'mantra-core';

import Footer from '../components/footer';

export const composer = ({ context }, onData) => {
  const currentDate = new Date();
  onData(null, {
    currentYear: currentDate.getFullYear(),
  });
};

export const depsMapper = context => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper),
)(Footer);
