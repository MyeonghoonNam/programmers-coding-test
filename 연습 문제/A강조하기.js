const myString = "abstract algebra";

console.log(solution(myString));

function solution(myString) {
  const result = myString.toLowerCase().replaceAll("a", "A");
  return result;
}
