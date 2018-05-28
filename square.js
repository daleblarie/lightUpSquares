/* global document */
const squareSize = 60;
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function Square(color, xpos, ypos) {
  this.color = color;
  this.xLeft = xpos;
  this.yTop = ypos;
  this.glow = false;
  this.xRight = this.xLeft + squareSize;
  this.yBottom = this.yTop + squareSize;
}

Square.prototype.glow = function glow() {
  if (this.glow === false) {
    this.glow = true;
  } else {
    this.glow = false;
  }
};

Square.prototype.draw = function draw() {
  ctx.fillStyle = `rgb(${40 + this.xLeft}, ${40 + this.yTop} , 0)`;
  ctx.fillRect(this.xLeft, this.yTop, squareSize, squareSize);
};
