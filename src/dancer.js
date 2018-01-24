// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(this.top, this.left);
  this.step();
  this.originalPosition = {
    top: this.top,
    left: this.left
  };
};

Dancer.prototype.step = function () {
  setTimeout(this.step, this.timeBetweenSteps);
};
Dancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function (i, side) {
  //leftRight is a string either 'left' or 'right'
  //index is index in the big array of things
  var eitherOr = Math.floor(Math.random() * 2);
  // if (i > 18 && eitherOr === 1) {
  //   i = 18 - i;
  // }
  if (side === 'left') {
    var styleSettings = {
      margin: '0 auto',
      left: ((i * 30) + 400),
      top: 170,
      position: 'relative',
      display: 'block',
    };
  } else if (side === 'right') {
    var styleSettings = {
      top: 670,
      left: ((i * 30) + 390),
      margin: '0 auto',
      position: 'relative',
      display: 'block'
    };
  }
  this.$node.animate(styleSettings, 'slow');
};
Dancer.prototype.resetPosition = function () {
  this.$node.animate(this.originalPosition, 'slow');
};
// Dancer.prototype.squareUp = function (i, side) {
//   if (side === 'top') {
//     i = i % 4;
//   } else if (side === 'left') {
    
//   } else if (side === 'right') {
    
//   } else {
    
//   }
// };






















