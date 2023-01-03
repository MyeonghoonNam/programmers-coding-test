/**
 * 문자열 s가 주어진다
 * 첫 번째 글자 X
 * 두 번째 글자부터 오른쪽으로 읽어가면서 x와x가 아닌 다른 글자들이 나온 횟수 카운트
 * if) 처음으로 두 횟수가 같아지는 순간 지금까지 읽은 문자열 분리
 * s에서 분리한 문자열 제외 후 남은 부분에 대해 위 과정 반복, 남은 부분이 없다면 종료
 *
 * if) 두 횟수가 다른 상태에서 더 이상 읽을 글자 없다면 지금까지 읽은 문자열 분리하고 종료
 *
 * 요구사항: 분해한 문자열의 개수 도출
 */

const solution = (s) => {
  const result = [];
  let X = "";
  let currentReadString = "";
  let countX = 0;
  let countAnotherChar = 0;

  for (let char of s) {
    if (!X) {
      X = char;
      countX += 1;
      currentReadString += X;

      continue;
    }

    if (X === char) {
      countX += 1;
    } else {
      countAnotherChar += 1;
    }

    currentReadString += char;

    if (countX === countAnotherChar) {
      result.push(currentReadString);
      countX = 0;
      countAnotherChar = 0;
      currentReadString = "";
      X = "";
    }
  }

  if (currentReadString) {
    result.push(currentReadString);
  }

  return result.length;
};

const s = "abracadabra";
console.log(solution(s));
