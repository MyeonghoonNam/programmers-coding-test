const n = 3;
const computers = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];

console.log(solution(n, computers));

function solution(n, computers) {
  const visited = new Array(n).fill(false);

  const dfs = (v) => {
    if (visited[v]) return;

    visited[v] = true;

    computers[v].forEach((vertex, i) => {
      if (v === i || vertex === 0) return;

      if (!visited[i]) {
        dfs(i);
      }
    });
  };

  let result = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      result++;
    }
  }

  return result;
}
