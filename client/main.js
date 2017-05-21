import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'styled-components';

import 'normalize.css/normalize.css';

import createApp from './app';
import injectReducers from './configs/store';

import applyGlobalStyles from './configs/global-styles';
import initGoogleAnalytics from './configs/google-analytics';
import theme from './configs/theme';

import NotFound from './modules/core/components/not-found';

// Modules
import coreModule from './modules/core';
// import accountsModule from './modules/accounts';
// import pagesModule from './modules/pages';

// Configs
applyGlobalStyles();
initGoogleAnalytics();

// Create App
const app = createApp();
app.loadModule(coreModule);
// app.loadModule(accountsModule);
// app.loadModule(pagesModule);

// Init App
app.init();

// Configure Store with Reducers
const configureStore = injectReducers(app.reducers);
const store = configureStore();

// Router History
const history = createBrowserHistory();

Meteor.startup(() => {
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Switch>
            {app.routes}
            <Route component={NotFound} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>,
    document.getElementById('root'),
  );
});
