const N = 5000;

console.log(solution(N));

function solution(N) {
  let result = 0;

  while (N > 0) {
    if (N % 2 !== 0) {
      N = N - 1;
      result++;
    } else {
      N = N / 2;
    }
  }

  return result;
}
