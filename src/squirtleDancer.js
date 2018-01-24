var SquirtleDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  
  this.$node = $('<span class = \'squirtle pokemon\'> <img class=\'spin squirtle pokemon\' src="/Users/student/code/hrsf89-subclass-dance-party/Walking Squirtle.png"></span>');
  
  this.setPosition(this.top, this.left);
  this.type = 'squirtle';
  //console.log(window.dancers);
};

SquirtleDancer.prototype = Object.create(Dancer.prototype);

SquirtleDancer.prototype.constructor = SquirtleDancer;

