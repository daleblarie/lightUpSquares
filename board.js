/* global Square */

function Board(numSquares) {
  this.squares = [];
  for (let i = 0; i < numSquares; i += 1) {
    let squareToAdd;
    if (this.squares.length === 0) {
      squareToAdd = new Square(i, 0, 0);
    } else {
      squareToAdd = new Square(i, this.squares[i - 1].xRight, 0);
    }
    this.squares.push(squareToAdd);
  }
  this.xLeft = this.squares[0].xpos;
  this.yTop = this.squares[0].ypos;
}

Board.prototype.moveRight = function moveRight() {
  this.xLeft += 1;
  for (let i = 0; i < this.squares.length; i += 1) {
    this.squares[i].xLeft += 1;
    this.squares[i].xRight += 1;
  }
};
Board.prototype.moveUp = function moveUp() {
  this.yTop += 1;
};

Board.prototype.draw = function draw() {
  for (let i = 0; i < this.squares.length; i += 1) {
    this.squares[i].draw();
  }
};
