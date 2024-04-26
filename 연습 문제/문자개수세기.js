const my_string = "Programmers";

console.log(solution(my_string));

function solution(my_string) {
  const ascii = [...my_string].map((v) => v.charCodeAt());
  const result = new Array("z".charCodeAt() + 1);

  for (let i = "A".charCodeAt(); i <= "Z".charCodeAt(); i += 1) {
    result[i] = 0;
  }

  for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i += 1) {
    result[i] = 0;
  }

  for (let value of ascii) {
    result[value] += 1;
  }

  return result.filter((v) => v === 0 || Boolean);
}
