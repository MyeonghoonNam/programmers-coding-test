const n_str = "0010";

console.log(solution(n_str));

function solution(n_str) {
  const result = n_str.replace(/^0+/, "");
  return result;
}
