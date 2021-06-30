const n = 3;
const m = 12;

console.log(solution(n, m));

function solution(n, m) {
  const result = [];

  const gcd = (a, b) => {
    while (b !== 0) {
      const r = a % b;

      a = b;
      b = r;
    }

    return a;
  };

  const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
  };

  result.push(gcd(n, m));
  result.push(lcm(n, m));

  return result;
}
