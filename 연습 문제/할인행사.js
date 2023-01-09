const solution = (want, number, discount) => {
  let result = 0;
  const cart = [];

  want.forEach((_, i) => {
    for (let j = 0; j < number[i]; j++) {
      cart.push(want[i]);
    }
  });

  cart.sort();

  for (let i = 0; i < discount.length; i++) {
    const temp = discount.slice(i, i + 10).sort();

    if (cart.every((p, index) => p === temp[index])) {
      result++;
    }
  }

  return result;
};

const want = ["banana", "apple", "rice", "pork", "pot"];
const number = [3, 2, 2, 2, 1];
const discount = [
  "chicken",
  "apple",
  "apple",
  "banana",
  "rice",
  "apple",
  "pork",
  "banana",
  "pork",
  "rice",
  "pot",
  "banana",
  "apple",
  "banana",
];

console.log(solution(want, number, discount));
