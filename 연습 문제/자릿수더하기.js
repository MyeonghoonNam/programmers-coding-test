const N = 123;

console.log(solution(N));

function solution(N) {
  let result = 0;

  while (N !== 0) {
    result += N % 10;
    N = Math.floor(N / 10);
  }

  return result;
}
