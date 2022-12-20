const solution = (numbers) => {
  const NUMBERS = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let result = "";
  let temp = "";

  for (let i = 0; i < numbers.length; i++) {
    temp += numbers[i];

    if (temp in NUMBERS) {
      result += NUMBERS[temp];
      temp = "";
    }
  }

  return Number(result);
};

const solution2 = (numbers) => {
  const NUMBERS = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const reg = /zero|one|two|three|four|five|six|seven|eight|nine/g;
  const result = numbers.replace(reg, (v) => NUMBERS[v]);

  return result;
};

const numbers = "onefourzerosixseven";

console.log(solution(numbers));
console.log(solution2(numbers));
