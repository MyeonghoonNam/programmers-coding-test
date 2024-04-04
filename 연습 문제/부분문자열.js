const str1 = "abc";
const str2 = "aabcc";

console.log(solution(str1, str2));

function solution(str1, str2) {
  const result = new RegExp(str1).test(str2) ? 1 : 0;
  return result;
}
