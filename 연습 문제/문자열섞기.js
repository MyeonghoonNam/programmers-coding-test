const str1 = "aaaaa";
const str2 = "bbbbb";

console.log(solution(str1, str2));

function solution(str1, str2) {
  const L = str1.length;
  let result = "";

  for (let i = 0; i < L; i++) {
    result += str1[i];
    result += str2[i];
  }

  return result;
}
