import { Meteor } from 'meteor/meteor';
import publications from './publications';
import methods from './methods';
import configureBrowserPolicy from './configs/browser_policy';
import configureEmail from './configs/email';
import configureChalk from './configs/chalk';
import configureAccounts from './configs/accounts.js';
import addInitialData from './configs/initial_data';
import addFakeData from './configs/fake_data';

publications();
methods();

configureBrowserPolicy();
configureEmail();
configureChalk();
configureAccounts();
addInitialData();

if (Meteor.settings.public.appMode === 'development') {
  addFakeData();
}
