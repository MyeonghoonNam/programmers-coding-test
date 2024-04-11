const board = [
  [0, 1, 2],
  [1, 2, 3],
  [2, 3, 4],
  [3, 4, 5],
];
const k = 2;

console.log(solution(board, k));

function solution(board, k) {
  const N = board.length;
  const M = board[0].length;

  let result = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (i + j <= k) {
        result += board[i][j];
      }
    }
  }

  return result;
}
