const solution = (n, k) => {
  const LAMB_PRICE = 12000;
  const DRINK_PRICE = 2000;
  const SERVICE_COUNT = parseInt(n / 10);

  const result = LAMB_PRICE * n + DRINK_PRICE * (k - SERVICE_COUNT);

  return result;
};

const n = 10;
const k = 3;

console.log(solution(n, k));
