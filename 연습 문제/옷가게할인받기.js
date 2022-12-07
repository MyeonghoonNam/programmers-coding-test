const solution = (price) => {
  const DISCOUNT = {
    low: 0.95,
    medium: 0.9,
    high: 0.8,
  };

  const result =
    price >= 500000
      ? price * DISCOUNT.high
      : price >= 300000
      ? price * DISCOUNT.medium
      : price >= 100000
      ? price * DISCOUNT.low
      : price;

  return parseInt(result);
};

const price = 150000;
console.log(solution(price));
