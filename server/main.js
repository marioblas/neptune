import { Meteor } from 'meteor/meteor';
import publications from './publications';
import methods from './methods';
import configureMongoIndexes from './configs/mongo-indexes';
import configureBrowserPolicy from './configs/browser-policy';
import configureEmail from './configs/email';
import configureChalk from './configs/chalk';
import configureAccounts from './configs/accounts.js';
import addInitialData from './configs/initial-data';
import addFakeData from './configs/fake-data';

publications();
methods();

configureMongoIndexes();
configureBrowserPolicy();
configureEmail();
configureChalk();
configureAccounts();
addInitialData();

if (Meteor.settings.public.appMode === 'development') {
  addFakeData();
}
