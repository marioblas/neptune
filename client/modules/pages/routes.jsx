import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from '/client/modules/core/components/layout';
import Home from './components/home.jsx';

export default function (injectDeps, { FlowRouter }) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />),
      });
    },
  });
}
