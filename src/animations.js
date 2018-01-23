$(document).ready(function() {
  var $squirtle = $('.squirtle').on('click', function() {
    $(this).addClass('imageRot').one('webkitAnimationEnd mozAnimationEnd oAnimationEnd msAnimationEnd animationend', function () {
      $(this).removeClass('imageRot'); //remove anim class
      var url = $(this).data('linkurl'); //get url from data-attribute
      $( ':mobile-pagecontainer' ).pagecontainer( 'change', url); //navigate to page      
    });
  });


});