const solution = (sides) => {
  sides.sort((a, b) => b - a);

  const result = sides[1] + sides[1] - 1;

  return result;
};

const sides = [11, 7];
console.log(solution(sides));
