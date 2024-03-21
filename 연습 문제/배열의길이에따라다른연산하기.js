const arr = [49, 12, 100, 276, 33];
const n = 27;

console.log(solution(arr, n));

function solution(arr, n) {
  const result = arr.map((v, i) => (arr.length % 2 !== i % 2 ? v + n : v));

  return result;
}
