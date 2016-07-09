import publications from './publications';
import methods from './methods';
import configureEmail from './configs/email.js';
import addInitialData from './configs/initial_data.js';
import addFakeData from './configs/fake_data.js';

publications();
methods();

configureEmail();
addInitialData();
addFakeData();
