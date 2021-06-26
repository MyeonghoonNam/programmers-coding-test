const lottos = [45, 4, 35, 20, 3, 9];
const win_nums = [20, 9, 3, 45, 4, 35];

console.log(solution(lottos, win_nums));

function solution(lottos, win_nums) {
  let winCount = 0;
  let zeroCount = 0;

  // 맞은 갯수 : 순위
  const rankTable = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };

  lottos.forEach((num) => {
    if (num === 0) {
      zeroCount++;
    } else {
      if (win_nums.includes(num)) {
        winCount++;
      }
    }
  });

  let highRank = 0;
  let lowRank = 0;

  highRank = rankTable[winCount + zeroCount];
  lowRank = rankTable[winCount];

  return [highRank, lowRank];
}

// 다른 사람의 풀이
// function solution(lottos, win_nums) {
//   const rank = [6, 6, 5, 4, 3, 2, 1];

//   let minCount = lottos.filter(v => win_nums.includes(v)).length;
//   let zeroCount = lottos.filter(v => !v).length;

//   const maxCount = minCount + zeroCount;

//   return [rank[maxCount], rank[minCount]];
// }
