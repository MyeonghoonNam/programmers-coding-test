const n = 3;

console.log(solution(n));

function solution(n) {
  const result = Array.from(new Array(n), () => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    result[i][i] = 1;
  }

  return result;
}
