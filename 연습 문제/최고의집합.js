const solution = (n, s) => {
  const share = parseInt(s / n);

  if (!share) return [-1];

  const result = new Array(n).fill(share);
  const rest = s % n;

  for (let i = 0; i < rest; i++) {
    result[result.length - 1 - i] += 1;
  }

  return result;
};

const n = 2;
const s = 9;

console.log(solution(n, s));
