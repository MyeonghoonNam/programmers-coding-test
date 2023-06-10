const solution = (x, y, n) => {
  if (x >= y) return 0;

  const DP = Array(y + 1).fill(Infinity);

  DP[x] = 0;

  for (let i = x + 1; i < y + 1; i++) {
    if (x <= i - n) DP[i] = Math.min(DP[i], DP[i - n] + 1);
    if (i % 2 === 0 && x <= i / 2) DP[i] = Math.min(DP[i], DP[i / 2] + 1);
    if (i % 3 === 0 && x <= i / 3) DP[i] = Math.min(DP[i], DP[i / 3] + 1);
  }

  return DP[y] === Infinity ? -1 : DP[y];
};
