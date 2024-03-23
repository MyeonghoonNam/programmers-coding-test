const num_list = [1, 2, 3, 4, 5];
const n = 3;

console.log(solution(num_list, n));

function solution(num_list, n) {
  const result = num_list.some((v) => v === n) ? 1 : 0;
  return result;
}
