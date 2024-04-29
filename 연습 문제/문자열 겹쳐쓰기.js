const my_string = "He11oWor1d";
const overwrite_string = "lloWorl";
const s = 2;

console.log(solution(my_string, overwrite_string, s));

function solution(my_string, overwrite_string, s) {
  const myStrArr = [...my_string];

  myStrArr.splice(s, overwrite_string.length, overwrite_string);

  const result = myStrArr.join("");

  return result;
}
