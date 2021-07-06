const s = '}}}';

console.log(solution(s));

function isValid(s) {
  let map = new Map();
  map.set('(', ')');
  map.set('[', ']');
  map.set('{', '}');
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      stack.push(s[i]);
    } else {
      let pop = stack.pop();
      if (map.get(pop) !== s[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

function solution(s) {
  const arr = s.split('');
  let answer = 0;
  let count = s.length;

  while (count--) {
    arr.push(arr.shift());
    if (isValid(arr)) answer++;
  }

  return answer;
}
