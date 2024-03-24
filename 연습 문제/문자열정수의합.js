const num_str = "1000000";

console.log(solution(num_str));

function solution(num_str) {
  const result = [...num_str].reduce((acc, cur) => acc + Number(cur), 0);
  return result;
}
