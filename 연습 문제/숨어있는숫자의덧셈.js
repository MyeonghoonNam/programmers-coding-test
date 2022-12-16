const solution = (my_string) => {
  const reg = /\d/g;
  const result = my_string
    .match(reg)
    .reduce((acc, cur) => acc + Number(cur), 0);

  return result;
};

const my_string = "aAb1B2cC34oOp";

console.log(solution(my_string));
