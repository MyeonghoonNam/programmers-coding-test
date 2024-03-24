const n = 7;

console.log(solution(n));

function solution(n) {
  const isOdd = n % 2 !== 0;
  let result = 0;

  for (let i = 1; i <= n; i++) {
    if (isOdd) {
      if (i % 2 !== 0) {
        result += i;
      }
    } else {
      if (i % 2 === 0) {
        result += Math.pow(i, 2);
      }
    }
  }

  return result;
}
