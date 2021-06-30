const n = 626331;

console.log(solution(n));

function solution(n) {
  let count = 0;

  while (n !== 1 && count !== 500) {
    n = n % 2 === 0 ? n / 2 : n * 3 + 1;
    count++;
  }

  return n === 1 ? count : -1;
}
