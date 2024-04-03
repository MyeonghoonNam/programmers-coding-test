const my_string = "programmers";
const alp = "p";

console.log(solution(my_string, alp));

function solution(my_string, alp) {
  const result = my_string.replaceAll(alp, alp.toUpperCase());
  return result;
}
