const solution = (box, n) => {
  const [width, length, height] = box;

  const result =
    parseInt(width / n) * parseInt(length / n) * parseInt(height / n);

  return result;
};

const box = [10, 8, 6];
const n = 3;

console.log(solution(box, n));
