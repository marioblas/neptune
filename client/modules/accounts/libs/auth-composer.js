const authComposer = ({ context }, onData) => {
  const { Meteor } = context();
  const loggingIn = Meteor.loggingIn();
  const loggedIn = !!Meteor.userId();
  onData(null, { loggingIn, loggedIn });
};

export default authComposer;
