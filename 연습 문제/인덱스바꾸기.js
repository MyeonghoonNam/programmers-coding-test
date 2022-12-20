const solution = (my_string, num1, num2) => {
  const result = [...my_string];

  [result[num1], result[num2]] = [result[num2], result[num1]];

  return result.join("");
};

const my_string = "hello";
const num1 = 1;
const num2 = 2;

console.log(solution(my_string, num1, num2));
