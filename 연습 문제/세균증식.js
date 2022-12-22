const solution = (n, t) => {
  let result = n * Math.pow(2, t);

  return result;
};

const n = 2;
const t = 10;

console.log(solution(n, t));
