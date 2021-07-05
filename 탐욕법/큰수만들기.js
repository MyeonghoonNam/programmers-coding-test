const number = '1231234';
const k = 3;

console.log(solution(number, k));

function solution(number, k) {
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    const curNum = number[i];

    while (k > 0 && stack[stack.length - 1] < curNum) {
      stack.pop();
      k--;
    }

    stack.push(curNum);
  }

  if (k > 0) {
    stack.splice(stack.length - k, k);
  }

  const result = stack.join('');

  return result;
}
