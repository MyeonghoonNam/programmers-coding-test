const A = [1, 4, 2];
const B = [5, 4, 4];

console.log(solution(A, B));

function solution(A, B) {
  let result = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    result += A[i] * B[i];
  }

  return result;
}
