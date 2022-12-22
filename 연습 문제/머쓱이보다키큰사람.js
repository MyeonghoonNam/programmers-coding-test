const solution = (array, height) => {
  return array.filter((v) => v > height).length;
};

const array = [149, 180, 192, 170];
const height = 167;

console.log(solution(array, height));
