function solution(order) {
  const N = order.length;
  const stack = [];
  let currentIndex = 0;

  for (let i = 1; i <= N; i++) {
    stack.push(i);

    while (
      stack.length > 0 &&
      stack[stack.length - 1] === order[currentIndex]
    ) {
      stack.pop();
      currentIndex++;
    }
  }

  const result = currentIndex;

  return result;
}

const order = [4, 3, 1, 2, 5];

console.log(solution(order));
