import { createApp } from 'mantra-core';
import initContext from './configs/context';

// Modules
import coreModule from './modules/core';
import accountsModule from './modules/accounts';

// Init context
const context = initContext();

// Create App
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(accountsModule);

// Init App
app.init();
