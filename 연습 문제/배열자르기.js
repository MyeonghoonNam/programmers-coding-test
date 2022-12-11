const solution = (numbers, num1, num2) => {
  return numbers.slice(num1, num2 + 1);
};

const numbers = [1, 2, 3, 4, 5];
const num1 = 1;
const num2 = 3;

console.log(solution(numbers, num1, num2));
