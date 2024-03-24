const num_list = [2, 1, 6];

console.log(solution(num_list));

function solution(num_list) {
  const num1 = num_list[num_list.length - 1];
  const num2 = num_list[num_list.length - 2];
  const result = [...num_list];

  result.push(num1 > num2 ? num1 - num2 : num1 * 2);

  return result;
}
