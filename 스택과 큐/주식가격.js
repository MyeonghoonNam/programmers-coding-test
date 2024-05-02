const prices = [1, 2, 3, 2, 3];

console.log(solution(prices));

function solution(prices) {
  const result = [];

  for (let i = 0; i < prices.length; i += 1) {
    const stack = [];

    for (let j = i + 1; j < prices.length; j += 1) {
      stack.push(prices[i]);

      const top = stack[stack.length - 1];

      if (top > prices[j]) {
        break;
      }
    }

    result.push(stack.length);
  }

  return result;
}
