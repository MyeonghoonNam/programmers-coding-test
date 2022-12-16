const solution = (n) => {
  const result = new Set();
  let divisor = 2;

  while (divisor <= n) {
    if (n % divisor === 0) {
      n /= divisor;
      result.add(divisor);
    } else {
      divisor += 1;
    }
  }

  return [...result];
};

const n = 12;
console.log(solution(n));
