const myStr = "baconlettucetomato";

console.log(solution(myStr));

// 문제 2차 해결
// 정규식
function solution(myStr) {
  const result = myStr.match(/[^a-c]+/g) || ["EMPTY"];
  return result;
}

// 문제 1차 해결
// split
// function solution(myStr) {
//   const result = myStr.split(/[abc]/g).filter(Boolean);
//   return result.length ? result : ["EMPTY"];
// }
