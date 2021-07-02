const n = 10000;

console.log(solution(n));

function solution(n) {
  let result = 0;

  const checkSum = (cur, sum, n) => {
    if (sum === n) return true;
    else if (sum > n) return false;
    else return checkSum(cur + 1, cur + sum, n);
  };

  for (let i = 1; i <= n; i++) {
    if (checkSum(i, 0, n)) result++;
  }

  return result;
}
