const solution = (dots) => {
  const width =
    Math.max(...dots.map((arr) => arr[0])) -
    Math.min(...dots.map((arr) => arr[0]));

  const height =
    Math.max(...dots.map((arr) => arr[1])) -
    Math.min(...dots.map((arr) => arr[1]));

  return width * height;
};

const dots = [
  [1, 1],
  [2, 1],
  [2, 2],
  [1, 2],
];

console.log(solution(dots));
