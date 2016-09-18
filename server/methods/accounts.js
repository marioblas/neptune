import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';

export default function () {
  Meteor.methods({
    'accounts.sendPasswordRecoveryEmail': (email) => {
      check(email, String);

      const user = Accounts.findUserByEmail(email);

      if (!user) {
        throw new Meteor.Error(
          'accounts.sendPasswordRecoveryEmail.userNotFound',
          `User account with email ${email} not found`
        );
      }

      Accounts.sendResetPasswordEmail(user._id);
    },
  });
}
