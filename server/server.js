Meteor.publish("all-products", function () {
  return Products.find(); // everything
});

Accounts.onCreateUser(function(options, user) {
  options.profile = {
    score: 0
  }
  // We still want the default hook's 'profile' behavior.
  if (options.profile)
    user.profile = options.profile;
  return user;
});