const solution = (my_string, letter) => {
  return [...my_string].filter((char) => char !== letter).join("");
};

const my_string = "abcdef";
const letter = "f";

console.log(solution(my_string, letter));
