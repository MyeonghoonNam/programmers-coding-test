const solution = (numbers) => {
  let result = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < numbers.length - 1; i++) {
    const number1 = numbers[i];

    for (let j = i + 1; j < numbers.length; j++) {
      const number2 = numbers[j];
      const calc = number1 * number2;

      if (result < calc) {
        result = calc;
      }
    }
  }

  return result;
};

const numbers = [1, 2, -3, 4, -5];
console.log(solution(numbers));
