// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(this.top, this.left);
  this.step();
};

Dancer.prototype.step = function () {
  setTimeout(this.step, this.timeBetweenSteps);
};
Dancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: this.top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function (i, side) {
  //leftRight is a string either 'left' or 'right'
  //index is index in the big array of things
  if (side === 'left') {
    var styleSettings = {
      margin: '10px 10px',
      left: ((i * 30) + 9),
      top: 170 + i * 10
    };
  } else if (side === 'right') {
    var styleSettings = {
      top: 670 - i * 10,
      left: ((i * 30) - 6),
      margin: '10px 10px'
    };
  }
  this.$node.animate(styleSettings, 'slow');
};






















