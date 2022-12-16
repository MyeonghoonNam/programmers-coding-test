const getFactorial = (number) => {
  if (number === 1) return 1;

  return number * getFactorial(number - 1);
};

const solution = (n) => {
  for (let i = 10; i > 0; i--) {
    if (getFactorial(i) <= n) {
      return i;
    }
  }
};

const n = 7;

console.log(solution(n));
