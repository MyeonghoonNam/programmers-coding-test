const rank = [3, 7, 2, 5, 4, 6, 1];
const attendance = [false, true, true, true, true, false, false];

console.log(solution(rank, attendance));

function solution(rank, attendance) {
  const [a, b, c] = rank
    .map((e, i) => ({
      number: i,
      score: e,
    }))
    .filter((_, i) => attendance[i])
    .sort((a, b) => a.score - b.score);

  const result = 10000 * a.number + 100 * b.number + c.number;

  return result;
}
