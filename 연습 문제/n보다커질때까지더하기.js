const numbers = [34, 5, 71, 29, 100, 34];
const n = 123;

console.log(solution(numbers, n));

function solution(numbers, n) {
  const result = numbers.reduce((acc, cur) => (acc <= n ? acc + cur : acc), 0);
  return result;
}
