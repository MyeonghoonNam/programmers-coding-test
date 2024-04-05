const myString = "abcdevwxyz";

console.log(solution(myString));

function solution(myString) {
  const result = [...myString].map((v) => (v < "l" ? "l" : v)).join("");
  return result;
}
