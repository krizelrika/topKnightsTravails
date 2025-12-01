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

// BFS to find shortest knight path
function knightMoves(start, end) {
  if (start[0] === end[0] && start[1] === end[1]) {
    return [start]; // no movement needed
  }

  const queue = [];
  const visited = new Set();
  const parent = new Map(); // child -> parent mapping

  queue.push(start);
  visited.add(start.toString());

  while (queue.length > 0) {
    const current = queue.shift();

    for (const next of validMoves(current)) {
      const key = next.toString();

      if (!visited.has(key)) {
        visited.add(key);
        parent.set(key, current);

        if (next[0] === end[0] && next[1] === end[1]) {
          return buildPath(start, end, parent);
        }

        queue.push(next);
      }
    }
  }
}

// Reconstruct path from parent map
function buildPath(start, end, parent) {
  const path = [];
  let current = end;

  while (current.toString() !== start.toString()) {
    path.push(current);
    current = parent.get(current.toString());
  }

  path.push(start);
  return path.reverse();
}