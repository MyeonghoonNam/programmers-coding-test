const num_list = [3, 4, 5, 2, 1];

console.log(solution(num_list));

function solution(num_list) {
  const multiply = num_list.reduce((acc, cur) => acc * cur);
  const sum = num_list.reduce((acc, cur) => acc + cur);
  const result = multiply < Math.pow(sum, 2) ? 1 : 0;

  return result;
}
