import { createApp } from 'mantra-core';
import initContext from './configs/context';

// Modules
import coreModule from './modules/core';
import pagesModule from './modules/pages';

// Init context
const context = initContext();

// Create App
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(pagesModule);

// Init App
app.init();
