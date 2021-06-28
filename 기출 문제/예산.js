const d = [2, 2, 3, 3];
const budget = 10;

console.log(solution(d, budget));

function solution(d, budget) {
  let result = 0;
  let sum = 0;

  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    result++;

    sum += d[i];

    if (sum > budget) {
      result--;
    }
  }

  return result;
}
