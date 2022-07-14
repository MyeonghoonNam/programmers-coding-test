const n = 5;
const results = [
  [4, 3],
  [4, 2],
  [3, 2],
  [1, 2],
  [2, 5],
];
const solution = (n, results) => {
  const score = Array.from(new Array(n + 1), () =>
    new Array(n + 1).fill(false)
  );

  for (let i = 0; i < results.length; i++) {
    const [from, to] = results[i];
    score[from][to] = true;
  }

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (score[i][k] && score[k][j]) {
          score[i][j] = true;
        }
      }
    }
  }

  let result = 0;

  for (let i = 1; i <= n; i++) {
    let count = 0; // 승패여부를 알 수 있는 경기 수

    for (let j = 1; j <= n; j++) {
      if (score[i][j] || score[j][i]) {
        count++;
      }
    }

    if (count === n - 1) {
      result++;
    }
  }

  return result;
};

console.log(solution(n, results));
