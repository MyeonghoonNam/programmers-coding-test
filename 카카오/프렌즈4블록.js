const solution = (m, n, board) => {
  board = board.map((row) => row.split(""));

  const isRemove = (m, n) => {
    const block = board[m][n];

    if (block === 0) return false;
    if (board[m][n + 1] !== block) return false;
    if (board[m + 1][n] !== block) return false;
    if (board[m + 1][n + 1] !== block) return false;

    return true;
  };

  const isEmptyBlock = (row) => {
    return board[row].some((block) => block === 0);
  };

  const setRemoveBlock = (m, n) => {
    board[m][n] = 0;
    board[m][n + 1] = 0;
    board[m + 1][n] = 0;
    board[m + 1][n + 1] = 0;
  };

  const setDownBlock = (targetIndex, startIndex, n) => {
    board[targetIndex][n] = board[startIndex][n];
    board[startIndex][n] = 0;
  };

  while (true) {
    const indexs = [];

    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (isRemove(i, j)) {
          indexs.push([i, j]);
        }
      }
    }

    if (indexs.length === 0) {
      console.log(board);
      return [].concat(...board).filter((block) => block === 0).length;
    }

    for (let i = 0; i < indexs.length; i++) {
      const [row, col] = indexs[i];
      setRemoveBlock(row, col);
    }

    for (let i = m - 1; i > 0; i--) {
      if (!isEmptyBlock(i)) continue;

      for (let j = 0; j < n; j++) {
        if (board[i][j] !== 0) continue;

        for (let k = i - 1; k >= 0; k--) {
          if (board[k][j]) {
            setDownBlock(i, k, j);
            break;
          }
        }
      }
    }
  }
};

const m = 4;
const n = 5;
const board = ["CCBDE", "AAADE", "AAABF", "CCBBF"];

console.log(solution(m, n, board));
