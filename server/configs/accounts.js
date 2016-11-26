import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

export default function () {
  Accounts.config({
    sendVerificationEmail: true,
  });

  const appName = Meteor.settings.public.appName;
  const emailAddress = Meteor.settings.email.address;

  // Accounts email templates
  // http://docs.meteor.com/api/passwords.html#Accounts-emailTemplates
  Accounts.emailTemplates.siteName = appName;
  Accounts.emailTemplates.from = `${appName} <${emailAddress}>`;

  // Verify email
  Accounts.urls.verifyEmail = token => Meteor.absoluteUrl(`verify-email/${token}`);
  Accounts.emailTemplates.verifyEmail.subject = () => `${appName}: Email verification`;
  Accounts.emailTemplates.verifyEmail.text = (user, url) =>
    `Welcome to ${appName}!\nPlease follow the link below to complete the registration progress.\n${url}`;

  // Reset password
  Accounts.urls.resetPassword = token => Meteor.absoluteUrl(`reset-password/${token}`);
  Accounts.emailTemplates.resetPassword.subject = () => `${appName}: Reset password`;
  Accounts.emailTemplates.resetPassword.text = (user, url) =>
    `Hello, you've requested a link to reset your password.\nPlease set a new password by following de link below.\n${url}`;

  // Activate account
  Accounts.urls.enrollAccount = token => Meteor.absoluteUrl(`enroll-account/${token}`);
  Accounts.emailTemplates.enrollAccount.subject = () => `${appName}: Activate account`;
  Accounts.emailTemplates.enrollAccount.text = (user, url) =>
    `Welcome to ${appName}!\nPlease follow the link below to activate your account.\n${url}`;
}
