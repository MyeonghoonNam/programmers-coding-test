const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];

console.log(solution(maps));

function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const endPos = [n - 1, m - 1];

  const visited = Array.from(new Array(n), () => new Array(m).fill(false));
  let result = -1;

  const bfs = () => {
    const queue = [[0, 0, 1]];

    visited[0][0] = true;

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    while (queue.length) {
      const [x, y, dist] = queue.shift();

      if (x === endPos[0] && y === endPos[1]) {
        result = dist;

        break;
      }

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (checkRange(nx, ny) && maps[nx][ny] === 1) {
          if (!visited[nx][ny]) {
            queue.push([nx, ny, dist + 1]);
            visited[nx][ny] = true;
          }
        }
      }
    }
  };

  const checkRange = (x, y) => {
    if (x >= 0 && x < n && y >= 0 && y < m) return true;
    else return false;
  };

  bfs();

  return result;
}
