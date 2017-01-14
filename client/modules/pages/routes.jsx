import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from '/client/modules/core/components/layout';
import Home from './components/home.jsx';
import Secrets from './components/secrets';

export default function (injectDeps, { FlowRouter, GoogleAnalytics }) {
  const MainLayoutCtx = injectDeps(MainLayout);

  const publicRoutes = FlowRouter.group({
    triggersEnter: [GoogleAnalytics.pageView],
  });

  publicRoutes.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />),
      });
    },
  });

  FlowRouter.route('/secrets', {
    name: 'secrets',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Secrets />),
      });
    },
  });
}
