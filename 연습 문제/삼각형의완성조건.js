const solution = (sides) => {
  sides.sort((a, b) => b - a);

  const [maxSide, ...anotherSides] = sides;
  const result =
    maxSide < anotherSides.reduce((acc, cur) => acc + cur, 0) ? 1 : 2;

  return result;
};

const sides = [1, 2, 3];
console.log(solution(sides));
