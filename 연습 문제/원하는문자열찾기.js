const myString = "AbCdEfG";
const pat = "aBc";

console.log(solution(myString, pat));

function solution(myString, pat) {
  const rgx = new RegExp(pat, "gi");
  const result = rgx.test(myString) ? 1 : 0;
  return result;
}
