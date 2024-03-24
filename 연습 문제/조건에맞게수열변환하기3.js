const arr = [1, 2, 3, 100, 99, 98];
const k = 3;

console.log(solution(arr, k));

function solution(arr, k) {
  const result = arr.map((v) => (k % 2 === 0 ? v + k : v * k));
  return result;
}
