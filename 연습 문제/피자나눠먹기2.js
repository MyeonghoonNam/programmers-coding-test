const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

const solution = (n) => {
  return n / gcd(n, 6);
};

const n = 10;
console.log(solution(n));
