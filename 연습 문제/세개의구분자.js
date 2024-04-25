const myStr = "cabab";

console.log(solution(myStr));

function solution(myStr) {
  const result = myStr.split(/[abc]/g).filter(Boolean);
  return result.length ? result : ["EMPTY"];
}
