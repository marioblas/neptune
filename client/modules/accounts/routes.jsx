import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from '/client/modules/core/components/layout';
import Login from './containers/login';
import SignUp from './containers/sign-up';
import VerifyEmail from './containers/verify-email';
import ForgotPassword from './containers/forgot-password';
import ResetPassword from './containers/reset-password';
import ChangePassword from './containers/change-password';
import Profile from './containers/profile';

export default function (injectDeps, { FlowRouter, Meteor }) {
  const MainLayoutCtx = injectDeps(MainLayout);

  const accountsRoutes = FlowRouter.group({ name: 'accountsRoutes' });

  accountsRoutes.route('/login', {
    name: 'accounts.login',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Login loggedInRoute="accounts.profile" />),
      });
    },
  });

  accountsRoutes.route('/sign-up', {
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

  accountsRoutes.route('/log-out', {
    name: 'accounts.logOut',
    action() {
      Meteor.logout(() => FlowRouter.go('accounts.login'));
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

  accountsRoutes.route('/reset-password/:token', {
    name: 'accounts.resetPassword',
    action({ token }) {
      mount(MainLayoutCtx, {
        content: () => (<ResetPassword token={token} />),
      });
    },
  });

  accountsRoutes.route('/enroll-account/:token', {
    name: 'accounts.enrollAccount',
    action({ token }) {
      mount(MainLayoutCtx, {
        content: () => (<ResetPassword token={token} />),
      });
    },
  });

  accountsRoutes.route('/change-password', {
    name: 'accounts.changePassword',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<ChangePassword />),
      });
    },
  });

  accountsRoutes.route('/profile', {
    name: 'accounts.profile',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Profile />),
      });
    },
  });
}
