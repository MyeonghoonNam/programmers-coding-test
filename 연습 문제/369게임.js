const solution = (order) => {
  const reuslt = String(order)
    .split("")
    .filter((v) => [3, 6, 9].includes(Number(v))).length;

  return reuslt;
};

const solution2 = (order) => {
  const result = [...order.toString().matchAll(/[3|6|9]/g)].length;

  return result;
};

const order = 3;

console.log(solution(order));
console.log(solution2(order));
