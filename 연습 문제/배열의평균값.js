const solution = (numbers) => {
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  return sum / numbers.length;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(solution(numbers));
