import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from '/client/modules/core/components/layout';
import Login from './containers/login';
import Register from './containers/register';

export default function (injectDeps, { FlowRouter }) {
  const MainLayoutCtx = injectDeps(MainLayout);

  const accountsRoutes = FlowRouter.group({ name: 'accountsRoutes' });

  accountsRoutes.route('/login', {
    name: 'login',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Login />),
      });
    },
  });

  accountsRoutes.route('/register', {
    name: 'register',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Register />),
      });
    },
  });
}
