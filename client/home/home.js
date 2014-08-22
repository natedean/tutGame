Session.setDefault('readyForNext', true);
Session.setDefault('slideNumber', 1);
Session.setDefault('playerScore', 0);

Template.home.helper = function(){
  return "slide" + Session.get('slideNumber');
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
  return Session.get('playerScore');
} 


