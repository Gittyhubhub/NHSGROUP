$(function(){
    // this is a short hand way of saying run the createmenu function, 
    // when the document is loaded.
    
    var icon = $('.icon');
    var menu = $('.menu');
    createMenu(icon, menu);
  });
  
  
  function createMenu(icon, menu){
    // this function creates the functionality and animation for the menu.
    
    //menu stylize
    menu.addClass('menuClosed'); // to start with close the menu.
    
    var elem = menu.children('div'); // the length of how many navigation elements there are (3)
    var l = elem.length;
    
    var opts = { // set the options for the menu, where should the navigation items, start and how large a range etc. 
      
      startAng: 200, //degree
      range: 120,  //degree
      radius: 90,  //pixel
      nextTime: 50, //ms, time for next content to reveal, 0 for all at once
      animTime: 300, //ms, time for animation
      easingShow: 'easeOutBack', //limited strings
      easingHide: 'easeInBack', //limited strings
    }
    // calculate the range where the nav items should be displayed.
    var n = ((opts.range == 120)? l:l-1); 
    var interval = opts.range/n;
    
    // places the individual items with some spacing 
    var tarX = [];
    var tarY = [];
    for(var i=0; i<l; i++){ // for loop
      var ang = ((interval*i + opts.startAng)*Math.PI/180);
      tarX[i] = Math.round(Math.cos(ang)*opts.radius);
      tarY[i] = Math.round(Math.sin(ang)*opts.radius);
    }
    
    // when click on the large primary circle, do the following 
    icon.click(function(e){
       if(menu.is('.menuClosed')){
         // tell to do if the menu is closed do this
        for(var i=0; i<l; i++){
          // run through every item and do the animation for each item.
          // this animation opens the items up, and places them spaced out from each other.
         (function(j){
          console.log("elements "+ j);
          setTimeout(function(){
           elem.eq(j).show().animate({
            'left':tarX[j],
            'top':tarY[j],
            'opacity':1,
           }, opts.animTime, opts.easingShow, function(){
             if(j == l-1){
              menu.removeClass('menuClosed').addClass('menuOpened');
              icon.addClass('iconOpened');
             }
           });
          },opts.nextTime*j); // this is the delay between, each item being animated.
         })(i);
        }
       } else if(menu.is('.menuOpened')){
         // tells do to if menu is opened do this
        for(var i=l-1; i>=0; i--){
         (function(j){
           // tells the function to do the animation to close the menu, and hide each item.
          setTimeout(function(){
           elem.eq(j).animate({
            'left':0,
            'top':0,
            'opacity':0,
           }, opts.animTime, opts.easingHide, function(){
            $(this).hide();
            
            if(j == 0) {
             menu.removeClass('menuOpened').addClass('menuClosed');
             icon.removeClass('iconOpened');
            }
           });
          },opts.nextTime*(l-j-1)); // this is the delay between, each item being animated.
         })(i);
        }
       }
     e.preventDefault(); 
    });
  }