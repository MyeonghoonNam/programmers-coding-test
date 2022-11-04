/**
 * 음식 일렬 배치
 * 한명: 제일 왼쪽 부터 오른쪽, 다른 한명 제일 오른쪽 부터 왼쪽으로
 * 중앙은 물, 물을 먼저 먹는 선수 승리
 * 음식의 종류와 양은 동일, 먹는 순서도 동일, 칼로리 낮은 음식을 먼저 배치, 음식들의 가운데는 물(0) 배치
 *
 * 요구사항: 음식의 양을 칼로리가 적은 순서대로 주어진 배열 food를 가지고 대회를 위한 음식의 배치 도출
 */

function solution(food) {
  let result = "";

  for (let i = 1; i < food.length; i++) {
    const count = parseInt(food[i] / 2);
    result += String(i).repeat(count);
  }

  result += "0";
  result += result
    .slice(0, result.length - 1)
    .split("")
    .reverse()
    .join("");

  return result;
}

const food = [1, 7, 1, 2];
console.log(solution(food));
