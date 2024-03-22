const my_string = "ProgrammerS123";
const n = 11;

console.log(solution(my_string, n));

function solution(my_string, n) {
  const result = my_string.slice(my_string.length - n);
  return result;
}
