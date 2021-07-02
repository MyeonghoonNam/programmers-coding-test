// "()()"
// "(())()"
// ")()("
// "(()("
const s = '()()';

console.log(solution(s));

function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0 ? true : false;
}
