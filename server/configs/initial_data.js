// Add initial data here...
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';

export default function () {
  // Roles
  if (Roles.getAllRoles().fetch().length === 0) {
    const roles = ['root', 'admin'];
    roles.forEach((role) => {
      Roles.createRole(role);
    });
  }

  // Users
  const users = [
    { username: 'root', email: 'root@example.com', password: 'root', roles: ['root'] },
    { username: 'admin', email: 'admin@example.com', password: 'admin', roles: ['admin'] },
  ];

  users.forEach(({ username, email, password, roles }) => {
    const userExists = Accounts.findUserByEmail(email);

    if (!userExists) {
      const userId = Accounts.createUser({ username, email, password });
      Meteor.users.update(userId, { $set: { 'emails.0.verified': true } });
      Roles.addUsersToRoles(userId, roles);
    }
  });
}
