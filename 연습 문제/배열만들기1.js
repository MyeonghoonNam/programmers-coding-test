const n = 10;
const k = 3;

console.log(solution(n, k));

function solution(n, k) {
  const result = [];

  for (let i = k; i <= n; i += k) {
    result.push(i);
  }

  return result;
}
