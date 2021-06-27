const a = [-1, 0, 1];
const b = [1, 0, -1];

console.log(solution(a, b));

function solution(a, b) {
  const N = a.length;
  let result = 0;

  for (let i = 0; i < N; i++) {
    result += a[i] * b[i];
  }

  return result;
}

// reduce 활용 풀이
// function solution(a, b) {
//   var answer = a.reduce((acc, cur, idx) => acc += cur*b[idx], 0)
//   return answer;
// }
