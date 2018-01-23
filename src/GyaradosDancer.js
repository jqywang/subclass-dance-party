var GyaradosDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  
  this.$node = $('<span class = \'gyarados\'> <img id = \'gyarados\' class = \'gyarados\' src="/Users/student/code/hrsf89-subclass-dance-party/super_happy_gyarados_by_csinorman-d7kr9lw.gif"></span>');
  
  this.setPosition(this.top, 960);
  //console.log(window.dancers);
  //this.move();
};

GyaradosDancer.prototype = Object.create(Dancer.prototype);

GyaradosDancer.prototype.constructor = GyaradosDancer;

GyradosDancer.prototype.move = function () {
  var styleSettings = {
    top: this.top,
    left: -1000,
    margin: '10px 10px'
  };
  this.$node.animate(styleSettings, 'slow');
};