const solution = (slice, n) => {
  return Math.ceil(n / slice);
};

const slice = 7;
const n = 10;
console.log(solution(slice, n));
