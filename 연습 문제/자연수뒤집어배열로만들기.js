const n = 12345;

console.log(solution(n));

function solution(n) {
  const result = [];

  while (n !== 0) {
    result.push(n % 10);
    n = Math.floor(n / 10);
  }

  return result;
}
