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

  Accounts.emailTemplates.verifyEmail.subject = () => `${appName}: Email verification`;
  Accounts.emailTemplates.verifyEmail.text = (user, url) =>
    `Welcome to ${appName}!\nPlease follow the link to complete the registration progress.\n${url}`;
}
