const n = 3;

console.log(solution(n));

function solution(n) {
  let result = '';

  let flag = true;

  while (n) {
    if (flag) {
      result += '수';
    } else {
      result += '박';
    }

    flag = !flag;
    n--;
  }

  return result;
}
