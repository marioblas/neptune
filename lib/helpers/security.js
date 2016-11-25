import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

export default class Security {
  static checkLoggedIn(userId) {
    if (!userId) {
      throw new Meteor.Error('unauthorized', 'You are not logged in');
    }
  }

  static checkRole(userId, role) {
    if (!this.hasRole(userId, role)) {
      throw new Meteor.Error('unauthorized');
    }
  }

  static hasRole(userId, role) {
    return Roles.userIsInRole(userId, role);
  }

  static currentUserHasRole(role) {
    if (!Meteor.isClient) {
      throw new Meteor.Error('notAllowed', 'This method is only available on the client');
    }
    return this.hasRole(Meteor.userId(), role);
  }
}
