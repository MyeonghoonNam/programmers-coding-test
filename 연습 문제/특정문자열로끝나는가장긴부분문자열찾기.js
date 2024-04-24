const myString = "AbCdEFG";
const pat = "dE";

console.log(solution(myString, pat));

function solution(myString, pat) {
  const result = myString.slice(0, myString.lastIndexOf(pat) + pat.length);
  return result;
}
