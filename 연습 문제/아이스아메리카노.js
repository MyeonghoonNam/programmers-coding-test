const solution = (money) => {
  const COFFEE_PRICE = 5500;
  const result = [parseInt(money / COFFEE_PRICE), money % COFFEE_PRICE];

  return result;
};

const money = 15000;
console.log(solution(money));
