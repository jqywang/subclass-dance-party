$(document).ready(function() {
  $(document.body).on('mouseenter', '.spin', function() {
    $(this).addClass('imageRot').on('webkitAnimationEnd mozAnimationEnd oAnimationEnd msAnimationEnd animationend', function () {
      $(this).removeClass('imageRot'); //remove anim class
      for (var i = 0; i < window.dancers.length; i++) {
        if (i % 2 === 0) {
          window.dancers[i].lineUp(i, 'left');
        } else {
          window.dancers[i].lineUp(i, 'right');
        }
      }
    });
  }); 
  $(document.body).on('click', '.gyarados', function () {
    $(this).stop();
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
});