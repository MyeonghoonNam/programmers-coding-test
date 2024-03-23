const a = 9;
const b = 91;

console.log(solution(a, b));

function solution(a, b) {
  const first = Number(String(a) + String(b));
  const second = Number(String(b) + String(a));

  const result = Math.max(first, second);

  return result;
}
