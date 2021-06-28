const left = 24;
const right = 27;

console.log(solution(left, right));

function solution(left, right) {
  let result = 0;

  // left에서 right까지 반복문
  // left가 현재 수를 의미
  while (left <= right) {
    let count = 0; // 약수의 개수

    for (let i = 1; i <= left; i++) {
      if (left % i === 0) {
        count++;
      }
    }

    if (count % 2 === 0) {
      result += left;
    } else {
      result -= left;
    }

    left++;
  }

  return result;
}

// 다른 사람의 풀이
// 정수의 제곱근이 정수이면 홀수임을 조건문에 활용
// function solution(left, right) {
//   let answer = 0;
//   for (let i = left; i <= right; i++) {
//     if (Number.isInteger(Math.sqrt(i))) {
//       answer -= i;
//     } else {
//       answer += i;
//     }
//   }
//   return answer;
// }
