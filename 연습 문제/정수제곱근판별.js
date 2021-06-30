const n = 3;

console.log(solution(n));

function solution(n) {
  // 정수, 실수 모두 Number 타입이므로 정수인지 판별
  return Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
}
