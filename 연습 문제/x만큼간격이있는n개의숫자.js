const x = 2;
const n = 5;

console.log(solution(x, n));

function solution(x, n) {
  const result = [];
  let temp = x;

  while (n--) {
    result.push(temp);
    temp += x;
  }

  return result;
}
