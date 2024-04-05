const strArr = ["and", "notad", "abcd"];

console.log(solution(strArr));

function solution(strArr) {
  const DELETE_STR = "ad";
  const result = strArr.filter((v) => !v.includes(DELETE_STR));
  return result;
}
