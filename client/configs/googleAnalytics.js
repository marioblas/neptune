import { Meteor } from 'meteor/meteor';
import ReactGA from 'react-ga';

export default () => {
  const analyticsId = (
    Meteor.settings.public &&
    Meteor.settings.public.google &&
    Meteor.settings.public.google.analyticsId
  );

  if (analyticsId) {
    ReactGA.initialize(analyticsId, {
      debug: Meteor.settings.public.appDebug,
    });
  }
};
