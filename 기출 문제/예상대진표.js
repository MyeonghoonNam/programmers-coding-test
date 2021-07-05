const n = 8;
const a = 4;
const b = 7;

console.log(solution(n, a, b));

function solution(n, a, b) {
  let cnt = 0;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);

    cnt++;
  }

  return cnt;
}
