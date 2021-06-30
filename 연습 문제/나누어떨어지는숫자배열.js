const arr = [2, 36, 1, 3];
const divisor = 1;

console.log(solution(arr, divisor));

function solution(arr, divisor) {
  const result = arr.filter((num) => {
    return num % divisor === 0;
  });

  if (!result.length) return [-1];

  result.sort((a, b) => a - b);

  return result;
}
