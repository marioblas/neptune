import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from '/client/modules/core/components/layout';
import Login from './containers/login';
import SignUp from './containers/signup';
import PasswordRecovery from './containers/password_recovery';

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

  accountsRoutes.route('/signup', {
    name: 'signUp',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<SignUp />),
      });
    },
  });

  accountsRoutes.route('/password-recovery', {
    name: 'passwordRecovery',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<PasswordRecovery />),
      });
    },
  });
}
