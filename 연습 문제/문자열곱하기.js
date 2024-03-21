const my_string = "string";
const k = 3;

console.log(solution(my_string, k));

function solution(my_string, k) {
  const result = my_string.repeat(k);
  return result;
}
