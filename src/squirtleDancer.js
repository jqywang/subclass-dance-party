var SquirtleDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  
  this.$node = $('<span class = \'squirtle\'> <img class=\'spin squirtle\' src="/Users/student/code/hrsf89-subclass-dance-party/Walking Squirtle.png"></span>');
  
  this.setPosition(this.top, this.left);
  //console.log(window.dancers);
};

SquirtleDancer.prototype = Object.create(Dancer.prototype);

SquirtleDancer.prototype.constructor = SquirtleDancer;

