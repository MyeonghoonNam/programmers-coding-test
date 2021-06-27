const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board, moves));

function solution(board, moves) {
  const basket = [];
  let result = 0;

  moves.forEach((crain) => {
    let now = crain - 1;

    for (let i = 0; i < board.length; i++) {
      if (board[i][now] !== 0) {
        if (basket[basket.length - 1] === board[i][now]) {
          basket.pop();
          result += 2;
        } else {
          basket.push(board[i][now]);
        }

        board[i][now] = 0;

        break;
      }
    }
  });

  return result;
}
