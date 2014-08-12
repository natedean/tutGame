var clickCounter = 0;

  Template.main.greeting = function () {
    return "Welcome to template.";
  };

  Template.main.events({
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

