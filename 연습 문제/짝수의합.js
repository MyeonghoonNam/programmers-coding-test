const solution = (n) => {
  let result = 0;

  for (let i = 2; i <= n; i += 2) {
    result += i;
  }

  return result;
};

const n = 10;
console.log(solution(n));
