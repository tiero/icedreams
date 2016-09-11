// Inside the if (Meteor.isClient) block, right after Template.body.helpers:
Template.body.events({
  "submit .new-task": function (event) {
    // This function is called when the new task form is submitted

    var text = event.target.email.value;
    var fruit = event.target.fruits.value;
    var veg = event.target.veg.value;
    var liquid = event.target.liquid.value;


    Dreams.insert({
      email: email,
      fruit: fruit,
      veg: veg,
      liquid: liquid,
      createdAt: new Date() // current time
    });

    // Clear form
    event.target.text.value = "";
    event.target.fruits.value = "";
    event.target.veg.value = "";
    event.target.liquid.value = "";



    // Prevent default form submit
    return false;
  }
});