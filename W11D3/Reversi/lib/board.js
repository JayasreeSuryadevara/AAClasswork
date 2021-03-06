let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
// const transposedArray = Array.from({ length: this.length }, () => Array.from({ length: this[0].length }));
function _makeGrid () {
  let grid = Array.from({ length: 8 }, () => Array.from({ length: 8 })); // 8 arrays of array.length = 8

  // console.log(grid.length);
  let darkPiece = new Piece("black");
  let lightPiece = new Piece("white");
  grid[3][4] = (darkPiece);
  grid[4][3] = (darkPiece);
  grid[3][3] = (lightPiece);
  grid[4][4] = (lightPiece);

  return grid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}
 
Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  let startPos = pos[0];
  let endPos = pos[1];

  if (!(this.isValidPos(pos))){
    throw new Error('Not valid pos!');
  } else if (this.isOccupied(pos)) { 
    return this.grid[startPos][endPos];
  } else {
    return undefined;
  };
}

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
  let valid = this.validMoves(color);
  return valid != undefined && valid.length > 0;
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  let startPos = pos[0];
  let endPos = pos[1];
  currentPiece = this.grid[startPos][endPos];
  return currentPiece != undefined && currentPiece.color === color;
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  let startPos = pos[0];
  let endPos = pos[1];
  return (this.grid[startPos][endPos] instanceof Piece);
};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
  return this.validMoves("white") === undefined && this.validMoves("black") === undefined;
};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  return pos[0] >= 0 && pos[0] < 8 && pos[1] >= 0 && pos[1] < 8;
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */
function _positionsToFlip (board, pos, color, dir, piecesToFlip) {

  if (!piecesToFlip) {
    piecesToFlip = [];
  } else {
    piecesToFlip.push(pos);
  }

  let startPos = pos[0] + dir[0];
  let endPos = pos[1] + dir[1];
  let nextPos = [startPos, endPos];
  if (!(board.isValidPos(nextPos))){
    return null;
  } else if (!(board.isOccupied(nextPos))){
    return null;
  } else if (board.isMine(nextPos, color)){
    return null;
  };
  return _positionsToFlip(board, nextPos, color, dir, piecesToFlip );

}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  if (!this.validMove(pos, color)) {
    throw new Error('Invalid Move');
  }

  let directions = []

  for (let i = 0; i < Board.DIRS.length; i++) {
    directions = _positionsToFlip();
    
  }
};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
  // let startPos = pos[0];
  // let endPos = pos[1];
  // let currentPos = this.grid[startPos][endPos];
  
  if (this.isOccupied(pos)){ //&& !!(this._positionsToFlip(this, pos, color, Board.DIRS))) {
    return false;
  }
  
  for (let i = 0; i < Board.DIRS.length; i++) {
    const piecesToFlip = _positionsToFlip(this, pos, color, Board.DIRS[i]);
    if (piecesToFlip) {
      return true;
    }
  }
  return false;
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
  let validMoves = [];
    for( let i = 0; i < 8; i++){
      for(let j = 0; j < 8; j++){
        if (this.validMove([i,j], color)){
          validMoves.push([i,j]);
        }
      }
    };
  return validMoves;
};

module.exports = Board;


// Board.DIRS = [
// [0, 1], [1, 1], [1, 0],
//   [1, -1], [0, -1], [-1, -1],
//   [-1, 0], [-1, 1]
// ];
//[2,2]
