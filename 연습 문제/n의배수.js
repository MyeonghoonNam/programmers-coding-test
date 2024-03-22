const num = 98;
const n = 2;

console.log(solution(num, n));

function solution(num, n) {
  const result = num % n === 0 ? 1 : 0;
  return result;
}
