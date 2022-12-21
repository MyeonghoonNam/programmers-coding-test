const solution = (array) => {
  let max = -1;
  let index = 0;

  array.forEach((v, i) => {
    if (v > max) {
      max = v;
      index = i;
    }
  });

  return [max, index];
};

const array = [1, 8, 3];
console.log(solution(array));
