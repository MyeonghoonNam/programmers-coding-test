const solution = (keyinput, board) => {
  const MOVE = {
    left: [-1, 0],
    right: [1, 0],
    up: [0, 1],
    down: [0, -1],
  };

  const MAX_X = parseInt((board[0] - 1) / 2);
  const MAX_Y = parseInt((board[1] - 1) / 2);

  let start = [0, 0];

  keyinput.forEach((dir) => {
    const [x, y] = start;
    const [dx, dy] = MOVE[dir];

    const nx = x + dx;
    const ny = y + dy;

    if (-MAX_X <= nx && nx <= MAX_X && -MAX_Y <= ny && ny <= MAX_Y) {
      start = [nx, ny];
    }
  });

  return start;
};

const keyinput = ["down", "down", "down", "down", "down"];
const board = [7, 9];

console.log(solution(keyinput, board));
