// Knight's possible moves on a chessboard
const knightMoveset = [
  [2, 1], [1, 2], [-1, 2], [-2, 1],
  [-2, -1], [-1, -2], [1, -2], [2, -1],
];

// Check if a coordinate is on the 8x8 board
function isValid([x, y]) {
  return x >= 0 && x < 8 && y >= 0 && y < 8;
}

// Generate all valid knight moves from a position
function validMoves([x, y]) {
  return knightMoveset
    .map(([dx, dy]) => [x + dx, y + dy])
    .filter(isValid);
}
