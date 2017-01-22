// Sanitize CSS
import 'sanitize.css/sanitize.css';

import { createApp } from 'mantra-core';
import initContext from './configs/context';
import applyGlobalStyles from './configs/global-styles';
import initGoogleAnalytics from './configs/google-analytics';

// Modules
import coreModule from './modules/core';
import accountsModule from './modules/accounts';
import pagesModule from './modules/pages';

// Configs
applyGlobalStyles();
initGoogleAnalytics();

// Init context
const context = initContext();

// Create App
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(accountsModule);
app.loadModule(pagesModule);

// Init App
app.init();
