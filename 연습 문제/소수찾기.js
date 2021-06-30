const n = 10;

console.log(solution(n));

function solution(n) {
  const MAX = 1000000;

  const isPrime = new Array(MAX + 1).fill(true);

  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i <= MAX; i++) {
    for (let j = 2 * i; j <= MAX; j += i) {
      if (!isPrime[j]) continue;

      isPrime[j] = false;
    }
  }

  let result = 0;

  for (let i = 1; i <= n; i++) {
    result += isPrime[i] ? 1 : 0;
  }

  return result;
}
