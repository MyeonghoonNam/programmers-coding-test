const board = [
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 1, 0],
];

console.log(solution(board));

function solution(board) {
  let max = 0;

  if (board.length < 2 || board[0].length < 2) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        if (board[i][j] == 1) return 1;
      }
    }
  }

  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        board[i][j] =
          Math.min(board[i][j - 1], board[i - 1][j - 1], board[i - 1][j]) + 1;

        if (board[i][j] > max) {
          max = board[i][j];
        }
      }
    }
  }

  return Math.pow(max, 2);
}
