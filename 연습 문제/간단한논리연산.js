const x1 = false;
const x2 = true;
const x3 = true;
const x4 = true;

console.log(solution(x1, x2, x3, x4));

function solution(x1, x2, x3, x4) {
  const result = (x1 || x2) && (x3 || x4);
  return result;
}
