/* global Square */

function Board(numSquares) {
  this.squares = [];
  const numRows = Math.ceil(Math.sqrt(numSquares));
  let counter = 1;
  let rowCounter = 0;
  let squareToAdd = new Square(0, 0, 0);
  this.squares.push(squareToAdd);

  for (let i = 0; i < numRows - 1; i += 1) {
    squareToAdd = new Square(counter, this.squares[counter - 1].xRight, 0);
    this.squares.push(squareToAdd);
    counter += 1;
  }
  for (let i = 1; i < numRows; i += 1) {
    for (let j = 0; j < numRows; j += 1) {
      // let squareToAdd;
      if (j === 0) {
        rowCounter += 1;
        squareToAdd = new Square(counter, j, this.squares[counter - 1].yBottom);
      } else {
        squareToAdd = new Square(counter, this.squares[counter - 1].xRight, this.squares[counter - (numRows)].yBottom);
      }
      counter += 1;
      this.squares.push(squareToAdd);
    }
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
