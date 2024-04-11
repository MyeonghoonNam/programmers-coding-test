const my_string = "ihrhbakrfpndopljhygc";
const m = 4;
const c = 2;

console.log(solution(my_string, m, c));

function solution(my_string, m, c) {
  let result = "";

  for (let i = 0; i < my_string.length; i += m) {
    result += my_string[i + c - 1];
  }

  return result;
}
