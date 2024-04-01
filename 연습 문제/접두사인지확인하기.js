const my_string = "banana";
const is_prefix = "ban";

console.log(solution(my_string, is_prefix));

function solution(my_string, is_prefix) {
  const result = my_string.startsWith(is_prefix) ? 1 : 0;
  return result;
}
