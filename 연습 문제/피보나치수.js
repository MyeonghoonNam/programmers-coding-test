const n = 3;

console.log(solution(n));

function solution(n) {
  const fibonacci = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibonacci.push((fibonacci[i - 1] + fibonacci[i - 2]) % 1234567);
  }
  return fibonacci[n];
}

// const fibonacci = (n) => {
//   if (n < 2) return n;

//   return fibonacci(n - 1) + fibonacci(n - 2);
// };
