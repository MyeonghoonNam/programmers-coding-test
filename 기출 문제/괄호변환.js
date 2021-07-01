const p = '()))((()';

console.log(solution(p));

function solution(p) {
  let result = '';

  let leftCount = 0;
  let rightCount = 0;
  let flag = true;

  if (p.length === 0) return '';

  for (let i = 0; i < p.length; i++) {
    if (p[i] === '(') leftCount++;
    if (p[i] === ')') rightCount++;

    if (rightCount > leftCount) flag = false;

    if (leftCount === rightCount) {
      // 올바른 괄호인 경우
      if (flag) {
        result += p.slice(0, i + 1);
        result += solution(p.slice(i + 1));

        return result;
      } else {
        // 올바른 괄호가 아닌 경우
        result += '(';
        result += solution(p.slice(i + 1));
        result += ')';

        for (let j = 1; j < i; j++) {
          if (p[j] === '(') result += ')';
          if (p[j] === ')') result += '(';
        }

        return result;
      }
    }
  }
}
