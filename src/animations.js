$(document).ready(function() {
  $(document.body).on('mouseenter', '.spin', function() {
    $(this).addClass('imageRot').on('webkitAnimationEnd mozAnimationEnd oAnimationEnd msAnimationEnd animationend', function () {
      $(this).removeClass('imageRot'); //remove anim class
      //var url = $(this).data('linkurl'); //get url from data-attribute
      //$( ':mobile-pagecontainer' ).pagecontainer( 'change', url); //navigate to page      
      for (var i = 0; i < window.dancers.length; i++) {
        if (i % 2 === 0) {
          //$(window.dancers[i]).animate({left: ((i * 30) + 9), top: 170 + i * 10, margin: '10px 10px'}, 'slow');
          //console.log($(window.dancers[i].$node));
          window.dancers[i].lineUp(i, 'left');
        } else {
          //$(window.dancers[i]).animate({left: ((i * 30) - 6), top: 670 - i * 10, margin: '10px 10px'}, 'slow');
          window.dancers[i].lineUp(i, 'right');
        }
      }
    });
  });
});