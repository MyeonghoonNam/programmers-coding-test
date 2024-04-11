const a = 3;
const b = 4;
const included = [true, false, false, true, true];

console.log(solution(a, b, included));

function solution(a, d, included) {
  let result = 0;

  // 첫 항, 공차, N번째
  const getArithmeticSequence = (a, d, n) => {
    return a + (n - 1) * d; // N번째 항의 등차수열 합
  };

  for (let i = 0; i < included.length; i++) {
    if (included[i]) {
      result += getArithmeticSequence(a, d, i + 1);
    }
  }

  return result;
}
