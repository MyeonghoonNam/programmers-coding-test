const myString = "oxooxoxxox";

console.log(solution(myString));

function solution(myString) {
  const result = myString.split("x").map((v) => v.length);
  return result;
}
