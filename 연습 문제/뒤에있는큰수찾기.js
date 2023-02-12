function solution(numbers) {
  const stack = [];
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (stack.length === 0 || numbers[i] < numbers[i - 1]) {
      stack.push(i);
    } else {
      while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
        result[stack.pop()] = numbers[i];
      }

      stack.push(i);
    }
  }

  while (stack.length) {
    result[stack.pop()] = -1;
  }

  return result;
}

const numbers = [2, 3, 3, 5];
console.log(solution(numbers));
