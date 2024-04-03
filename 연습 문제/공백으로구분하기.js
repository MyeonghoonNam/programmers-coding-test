const my_string = " i    love  you";

console.log(solution(my_string));

function solution(my_string) {
  const result = my_string.split(" ").filter((v) => v);
  return result;
}
