const solution = (my_string) => {
  const numbers = [...my_string]
    .filter((v) => !Number.isNaN(Number(v)))
    .map((v) => Number(v))
    .sort((a, b) => a - b);

  return numbers;
};

const solution2 = (my_string) => {
  const reg = /\d/g;

  const numbers = my_string
    .match(reg)
    .map((v) => Number(v))
    .sort((a, b) => a - b);

  return numbers;
};

const my_string = "hi12392";
console.log(solution(my_string));
console.log(solution2(my_string));
