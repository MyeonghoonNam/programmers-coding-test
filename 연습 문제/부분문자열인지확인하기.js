const my_string = "banana";
const target = "ana";

console.log(solution(my_string, target));

function solution(my_string, target) {
  const result = my_string.includes(target) ? 1 : 0;
  return result;
}
