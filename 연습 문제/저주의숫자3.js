const hasThreeNumber = (n) => {
  while (n) {
    if (n % 10 === 3) return true;
    else n = parseInt(n / 10);
  }

  return false;
};

const solution = (n) => {
  let result = 0;

  for (let i = 0; i < n; i++) {
    result += 1;

    while (result % 3 === 0 || hasThreeNumber(result)) {
      result += 1;
    }
  }

  return result;
};

const n = 40;
console.log(solution(n));
