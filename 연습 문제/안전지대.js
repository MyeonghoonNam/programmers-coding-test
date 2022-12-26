const solution = (board) => {
  const n = board.length;

  let dangerAreaCount = 0;
  let bombAreaCount = 0;

  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

  const search = (x, y) => {
    for (let i = 0; i < 8; i++) {
      const nx = dx[i] + x;
      const ny = dy[i] + y;

      if (!isPossibleRange(nx, ny)) continue;

      if (board[nx][ny] === 0) {
        board[nx][ny] = "X";
        dangerAreaCount += 1;
      }
    }
  };

  const isPossibleRange = (x, y) => {
    if (x >= 0 && x < n && y >= 0 && y < n) return true;
    else return false;
  };

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if (board[x][y] === 1) {
        bombAreaCount += 1;
        search(x, y);
      }
    }
  }

  const result = n * n - (bombAreaCount + dangerAreaCount);

  return result;
};

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];

console.log(solution(board));
