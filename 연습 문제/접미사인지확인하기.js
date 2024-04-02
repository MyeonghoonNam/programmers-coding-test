const my_string = "banana";
const is_suffix = "ana";

console.log(solution(my_string, is_suffix));

function solution(my_string, is_suffix) {
  const result = my_string.endsWith(is_suffix) ? 1 : 0;
  return result;
}
