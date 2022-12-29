const solution = (i, j, k) => {
  let result = 0;

  for (let number = i; number <= j; number++) {
    if (number < 10 && number === k) {
      result += 1;
      continue;
    }

    if (number >= 10) {
      const numbers = String(number).split("").map(Number);
      const count = numbers.filter((num) => num === k).length;

      result += count;
    }
  }

  return result;
};

const i = 1;
const j = 13;
const k = 1;

console.log(solution(i, j, k));
