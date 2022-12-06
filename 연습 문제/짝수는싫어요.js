const solution = (n) => {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      result.push(i);
    }
  }

  return result;
};

const n = 10;
console.log(solution(n));
