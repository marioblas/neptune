import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Logger from '/server/libs/logger';

export default function () {
  Meteor.methods({
    'examples.log'(param) {
      check(param, String);
      Logger.info(param);
    },
  });
}
