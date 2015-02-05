counter = new Mongo.Collection("counter")
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
        counter.insert({date:new Date(),counter:Session.get('counter')})
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
      Kadira.connect()
      //Kadira.connect()
  });
}
