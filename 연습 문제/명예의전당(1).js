const solution = (k, score) => {
  const honor = [];
  const result = [];

  score.forEach((s) => {
    honor.push(s);
    honor.sort((a, b) => b - a);

    if (honor.length >= k) {
      result.push(honor[k - 1]);
    } else {
      result.push(honor[honor.length - 1]);
    }
  });

  return result;
};

const k = 3;
const score = [10, 100, 20, 150, 1, 100, 200];

console.log(solution(k, score));
