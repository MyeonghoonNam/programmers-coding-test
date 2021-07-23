const dirs = 'LULLLLLLU';

console.log(solution(dirs));

function solution(dirs) {
  const move = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };

  let checked = new Set();
  let nowPos = [0, 0];

  const checkRange = (x, y) => {
    if (x >= -5 && x < 6 && y >= -5 && y < 6) return true;
    else return false;
  };

  for (let i = 0; i < dirs.length; i++) {
    const [x, y] = nowPos;

    const nx = x + move[dirs[i]][0];
    const ny = y + move[dirs[i]][1];

    if (!checkRange(nx, ny)) continue;

    checked.add('' + x + y + nx + ny);
    checked.add('' + nx + ny + x + y);

    nowPos = [nx, ny];
  }

  return checked.size / 2;
}
