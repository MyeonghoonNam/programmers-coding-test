const number = 60;
const n = 2;
const m = 3;

console.log(solution(number, n, m));

function solution(number, n, m) {
  const result = number % n === 0 && number % m === 0 ? 1 : 0;
  return result;
}
