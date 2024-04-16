const my_string = "Progra21Sremm3";
const s = 6;
const e = 12;

console.log(solution(my_string, s, e));

function solution(my_string, s, e) {
  const prefix = my_string.slice(0, s);
  const middle = my_string.slice(s, e + 1);
  const suffix = my_string.slice(e + 1);
  const result = prefix + [...middle].reverse().join("") + suffix;

  return result;
}
