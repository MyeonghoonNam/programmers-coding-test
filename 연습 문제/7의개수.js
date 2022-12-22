const solution = (array) => {
  let result = 0;

  array.forEach((number) => {
    while (number > 0) {
      if (number % 10 === 7) result += 1;

      number = parseInt(number / 10);
    }
  });

  return result;
};

const array = [7, 77, 17];
console.log(solution(array));
