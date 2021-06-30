const n = 118372;

console.log(solution(n));

function solution(n) {
  const result = [];

  while (n !== 0) {
    result.push(n % 10);
    n = Math.floor(n / 10);
  }

  return Number(result.sort((a, b) => b - a).join(''));
}
