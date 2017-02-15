import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

export default function () {
  /**
   * Configure global accounts options
   * @see https://docs.meteor.com/api/accounts-multi.html#AccountsCommon-config
   */
  Accounts.config({
    sendVerificationEmail: true,
  });

  /**
   * Validate login attempts
   * @see https://docs.meteor.com/api/accounts-multi.html#AccountsServer-validateLoginAttempt
   */
  Accounts.validateLoginAttempt((attempt) => {
    // If the login has failed, just return false.
    if (!attempt.allowed) {
      return false;
    }

    // Check the user's email is verified
    // Note: if users may have multiple email addresses you'd need to do something more complex
    if (attempt.user.emails[0].verified !== true) {
      throw new Meteor.Error('email-not-verified', 'You must verify your email address');
    }

    return true;
  });

  // Accounts email templates
  // @see http://docs.meteor.com/api/passwords.html#Accounts-emailTemplates
  const appName = Meteor.settings.public.appName;
  const emailAddress = Meteor.settings.email.address;

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

  // Enroll account
  Accounts.urls.enrollAccount = token => Meteor.absoluteUrl(`enroll-account/${token}`);
  Accounts.emailTemplates.enrollAccount.subject = () => `${appName}: Enroll account`;
  Accounts.emailTemplates.enrollAccount.text = (user, url) =>
    `Welcome to ${appName}!\nPlease follow the link below to activate your account.\n${url}`;
}
