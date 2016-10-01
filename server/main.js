import { Meteor } from 'meteor/meteor';
import publications from './publications';
import methods from './methods';
import configureEmail from './configs/email';
import configureChalk from './configs/chalk';
import addInitialData from './configs/initial_data';
import addFakeData from './configs/fake_data';

publications();
methods();

configureEmail();
configureChalk();
addInitialData();

if (Meteor.settings.public.appMode === 'dev') {
  addFakeData();
}
