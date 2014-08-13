var clickCounter = 0;

  Template.userArea.greeting = function () {
    return "You logged in!  Give yourself a pat on the back.";
  };

  Template.userArea.events({
    'click input': function () {
      // template data, if any, is available in 'this'
    clickCounter++;  
    var p = $('#greeting'); 
     if(clickCounter === 1){
       p.html('Hello!');
     }else{
       p.html('You have pushed the green button ' + clickCounter + ' times.<br>  Are you bored yet?');    
     }
    
    }  
  });

