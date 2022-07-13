const n = 2;
const solution = (n) => {
  const DP = new Array(n + 1);
  DP[0] = 0;
  DP[1] = 1;
  DP[2] = 2;

  if (n < 3) {
    return DP[n];
  }

  for (let i = 3; i <= n; i++) {
    DP[i] = (DP[i - 1] + DP[i - 2]) % 1234567;
  }

  return DP[n];
};

console.log(solution(n));
