const solution = (n) => {
  const DP = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    DP[i] = (DP[i - 1] + DP[i - 2]) % 1000000007;
  }

  return DP[n];
};

const n = 4;
console.log(solution(n));
