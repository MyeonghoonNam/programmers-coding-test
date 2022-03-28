const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];

console.log(solution(N, stages));

function solution(N, stages) {
  const failureRate = [];
  let countStagePeople = stages.length;

  // 스테이지 별로 실패율 확인
  for (let i = 1; i < N + 1; i++) {
    // 스테이지 클리어하지 못한 사람 수
    const countFailPeople = getCountFailPeople(i, stages);

    // [실패율, 현재 stage 정보]
    if (countFailPeople === 0) {
      failureRate.push([0, i]);
    } else {
      failureRate.push([countFailPeople / countStagePeople, i]);
    }

    countStagePeople -= countFailPeople;
  }

  const result = failureRate
    .sort((a, b) => b[0] - a[0] || a[1] - b[1])
    .map((el) => el[1]);

  return result;
}

function getCountFailPeople(num, stages) {
  const count = stages.filter((el) => el === num).length;

  return count;
}
