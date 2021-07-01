const s = 'baabaa';

console.log(solution(s));

function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0 ? 1 : 0;
}
