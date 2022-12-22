const solution = (n) => {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
};

const n = 144;

console.log(solution(n));
