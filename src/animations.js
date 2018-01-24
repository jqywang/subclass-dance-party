$(document).ready(function() {
  $(document.body).on('mouseenter', '.spin', function() {
    $(this).addClass('imageRot').on('webkitAnimationEnd mozAnimationEnd oAnimationEnd msAnimationEnd animationend', function () {
      $(this).removeClass('imageRot'); //remove anim class
    });
  }); 
  $(document.body).on('click', '.pokemon', function (e) {
    var $pokeball = $('<img class = "image-wrapper" src="/Users/student/code/hrsf89-subclass-dance-party/pokeball_gif.gif"/>');
    $(this).stop().css({'left': e.pageX - 10 + 'px', 'top': e.pageY + 'px'})
      .append($pokeball)
      .appendTo($(this));
    setTimeout(function() {
      $pokeball.addClass('fade-out');            
      setTimeout(function() { $pokeball.remove(); }, 2000); 
    }, 2000);
  });
  // $(document.body).on('click', '.squirtle', function () {
  //   console.log('squirtle clicked');
  //   $(this).stop().attr('src', '/Users/student/code/hrsf89-subclass-dance-party/still_gyarados.png');
  // });
  $(document.body).on('click', '#resetPosition', function () {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].resetPosition();
    }
  });
  
  $(document.body).on('click', '#lineUp', function () {
    for (var i = 0; i < window.dancers.length; i++) {
      if (i % 2 === 0) {
        window.dancers[i].lineUp(i, 'left');
      } else {
        window.dancers[i].lineUp(i, 'right');
      }
    } 
  });
  
  // $(document.body).on('click', '.missArea', function () {
  //   var dancer = new MissPokeballDancer(top, left, 1000);
  //   $('body').append(dancer.$node);
  // });
  
  
  // $(document.body).on('click', '.pokemon', function(e) {
    // var div = $('<div class="image-wrapper">')
    //   .css({
    //     'left': e.pageX + 100 + 'px',
    //     'top': e.pageY + 'px'
    //   })
    //   .append($('<img class = "image-wrapper" src="/Users/student/code/hrsf89-subclass-dance-party/missPokeball.gif"/>'))
    //   .appendTo($(document));
  // });
});