/**
 * 사과의 점수 범위: 1 <= 사과 <= k
 * 한 상자의 사과 중 가장 낮은 사과 점수 = p
 * 한 상자에 포함된 사과 수 = m
 * 사과 한 상자의 가격 = p * m
 *
 * 요구 사항: 과일 장수가 가능한 많은 사과를 팔았을 때 얻을 수 있는 최대 이익
 *
 * 사과는 상자 단위로만 판매, 남는 사과 버림
 *
 */

const solution = (k, m, score) => {
  score.sort((a, b) => b - a);

  let result = 0;
  let index = m - 1;
  let boxCount = parseInt(score.length / m);

  while (boxCount--) {
    result += score[index] * m;
    index += m;
  }

  return result;
};

const k = 4;
const m = 3;
const score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];

console.log(solution(k, m, score));
