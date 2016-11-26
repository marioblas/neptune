import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from '/client/modules/core/components/layout';
import Login from './containers/login';
import SignUp from './containers/sign-up';
import VerifyEmail from './containers/verify-email';
import ForgotPassword from './containers/forgot-password';

export default function (injectDeps, { FlowRouter }) {
  const MainLayoutCtx = injectDeps(MainLayout);

  const accountsRoutes = FlowRouter.group({ name: 'accountsRoutes' });

  accountsRoutes.route('/login', {
    name: 'accounts.login',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Login />),
      });
    },
  });

  accountsRoutes.route('/signup', {
    name: 'accounts.signUp',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<SignUp />),
      });
    },
  });

  accountsRoutes.route('/verify-email/:token', {
    name: 'accounts.verifyEmail',
    action({ token }) {
      mount(MainLayoutCtx, {
        content: () => (<VerifyEmail token={token} />),
      });
    },
  });

  accountsRoutes.route('/forgot-password', {
    name: 'accounts.forgotPassword',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<ForgotPassword />),
      });
    },
  });
}
