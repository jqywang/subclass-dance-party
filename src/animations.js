$(document).ready(function() {
  $(document.body).on('mouseenter', '.spin', function() {
    $(this).addClass('imageRot').on('webkitAnimationEnd mozAnimationEnd oAnimationEnd msAnimationEnd animationend', function () {
      $(this).removeClass('imageRot'); //remove anim class
      console.log(window.dancers);
      for (var i = 0; i < window.dancers.length; i++) {
        if (i % 2 === 0) {
          window.dancers[i].lineUp(i, 'left');
        } else {
          window.dancers[i].lineUp(i, 'right');
        }
      }
    });
  });
  
  
  
});