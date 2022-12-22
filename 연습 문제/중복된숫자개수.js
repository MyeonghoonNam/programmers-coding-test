const solution = (array, n) => {
  return array.filter((v) => v === n).length;
};

const array = [1, 1, 2, 3, 4, 5];
const n = 1;

console.log(solution(array, n));
