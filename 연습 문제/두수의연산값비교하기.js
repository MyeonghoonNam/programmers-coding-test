const a = 2;
const b = 91;

console.log(solution(a, b));

function solution(a, b) {
  const first = Number(`${a}${b}`);
  const second = 2 * a * b;

  const result = Math.max(first, second);

  return result;
}
