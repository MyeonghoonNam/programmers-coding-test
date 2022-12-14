const solution = (numbers, k) => {
  let next = 0;

  for (let i = 0; i < k; i++) {
    next += 2;

    if (next > numbers.length) {
      next -= numbers.length;
    }
  }

  return numbers[next - 2];
};

const solution2 = (numbers, k) => {
  return numbers[(--k * 2) % numbers.length];
};

const numbers = [1, 2, 3, 4];
const k = 2;

console.log(solution(numbers, k));
// console.log(solution2(numbers, k));
