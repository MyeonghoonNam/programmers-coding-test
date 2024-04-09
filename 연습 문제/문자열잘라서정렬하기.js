const myString = "axbxcxdx";

console.log(solution(myString));

function solution(myString) {
  const result = myString.match(/[^x]+/g).sort();
  return result;
}
