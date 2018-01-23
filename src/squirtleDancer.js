var SquirtleDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class=\'squirtle\' id="squirtle" src="https://uploads.scratch.mit.edu/users/avatars/18632851.png">');
  
  this.setPosition(this.top, this.left);
};

SquirtleDancer.prototype = Object.create(Dancer.prototype);

SquirtleDancer.prototype.constructor = SquirtleDancer;

