const solution = (my_string) => {
  const reg = /[A-Z]/g;

  const result = my_string
    .replace(reg, (v) => v.toLowerCase())
    .split("")
    .sort()
    .join("");

  return result;
};

const my_string = "heLLo";

console.log(solution(my_string));
