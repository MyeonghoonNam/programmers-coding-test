const num_list = [12, 4, 15, 46, 38, -2, 15];

console.log(solution(num_list));

function solution(num_list) {
  const result = num_list.findIndex((v) => v < 0);
  return result;
}
