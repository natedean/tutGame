Meteor.publish("all-products", function () {
  return Products.find(); // everything
});