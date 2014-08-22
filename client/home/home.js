Session.setDefault('readyForNext', false);
Session.setDefault('slideNumber', 0);
Session.setDefault('playerScore', 0);

Template.home.helper = function(){
  if(Meteor.user())
    return "slide" + Meteor.user().profile.score;
  else
    return "slide0" 
}

Template.home.showNextBtn = function(){
  return Session.get('readyForNext');
}

Template.home.events({
  'click #nextSlide': function(){
    var nextSlide = Session.get('slideNumber') + 1;
    Session.set('slideNumber', nextSlide);
    Session.set('readyForNext',false);
  },
  'click #slideCompleted': function(){
    Session.set('readyForNext',true);
  }
});

Template.home.playerScore = function(){
    if (Meteor.user()){
      console.log(Meteor.user());
      return Meteor.user().profile.score;
    }
    else{
      return 0;
    }
} 


