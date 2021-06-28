const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];

console.log(solution(N, stages));

function solution(N, stages) {
  const info = {};
  const result = [];

  for (let i = 0; i < stages.length; i++) {
    const stage = stages[i];

    if (stage <= N) {
      if (info[stage]) {
        info[stage]++;
      } else {
        info[stage] = 1;
      }
    }
  }

  let humanCount = stages.length;

  for (let i = 1; i <= N; i++) {
    const notClearCount = info[i] ? info[i] : 0;
    const failureRate = notClearCount / humanCount;

    humanCount -= notClearCount;

    result.push([failureRate, i]);
  }

  result.sort((a, b) => {
    return b[0] - a[0] || a[1] - b[1];
  });

  return result.map((el) => {
    return el[1];
  });
}
