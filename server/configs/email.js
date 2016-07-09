import { Meteor } from 'meteor/meteor';

export default function () {
  const email = Meteor.settings.email.address;
  const password = Meteor.settings.email.password;
  const host = Meteor.settings.email.host;
  const port = Meteor.settings.email.port;

  process.env.MAIL_URL = `smtp://${email}:${password}@${host}:${port}/`;
}
