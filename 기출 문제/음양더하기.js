const absolutes = [1, 2, 3];
const signs = [false, false, true];

console.log(solution(absolutes, signs));

function solution(absolutes, signs) {
  const result = absolutes
    .map((num, i) => {
      return signs[i] ? num : -num;
    })
    .reduce((acc, cur) => {
      return acc + cur;
    });

  return result;
}

// 메소드 사용 횟수를 줄였다.
// function solution(absolutes, signs) {
//   let answer = 0;
//   absolutes.forEach((v, i) => {
//       if (signs[i]) {
//           answer += v;
//       } else {
//           answer -= v;
//       }
//   })
//   return answer;
// }
