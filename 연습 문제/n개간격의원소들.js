const num_list = [4, 2, 6, 1, 7, 6];
const n = 2;

console.log(solution(num_list, n));

function solution(num_list, n) {
  const result = num_list.filter((_, i) => i % n === 0);
  return result;
}
