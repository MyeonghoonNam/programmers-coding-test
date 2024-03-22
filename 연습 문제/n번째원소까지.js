const num_list = [2, 1, 6];
const n = 1;

console.log(solution(num_list, n));

function solution(num_list, n) {
  const result = num_list.slice(0, n);
  return result;
}
