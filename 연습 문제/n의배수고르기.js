const solution = (n, numlist) => {
  const result = numlist.filter((number) => number % n === 0);

  return result;
};

const n = 3;
const numlist = [4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log(solution(n, numlist));
