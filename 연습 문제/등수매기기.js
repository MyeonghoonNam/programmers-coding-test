const solution = (score) => {
  const grade = new Map();

  score
    .map(([a, b]) => (a + b) / 2)
    .sort((a, b) => b - a)
    .forEach((s, i) => (!grade.has(s) ? grade.set(s, i + 1) : ""));

  const result = score.map(([a, b]) => grade.get((a + b) / 2));

  return result;
};

const score = [
  [80, 70],
  [70, 80],
  [30, 50],
  [90, 100],
  [100, 90],
  [100, 100],
  [10, 30],
];

console.log(solution(score));
