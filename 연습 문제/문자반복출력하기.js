const solution = (my_string, n) => {
  let result = "";

  my_string.split("").forEach((char) => {
    result += char.repeat(n);
  });

  return result;
};

const my_string = "hello";
const n = 3;
console.log(solution(my_string, n));
