var GyaradosDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  
  this.$node = $('<span class = \'gyarados\'> <img class = \'gyarados\' src="/Users/student/code/hrsf89-subclass-dance-party/super_happy_gyarados_by_csinorman-d7kr9lw.gif"></span>');
  
  this.setPosition(this.top, this.left);
  //console.log(window.dancers);
};

GyaradosDancer.prototype = Object.create(Dancer.prototype);

GyaradosDancer.prototype.constructor = GyaradosDancer;

