const arr = [0, 0, 0, 1];
const idx = 1;

console.log(solution(arr, idx));

function solution(arr, idx) {
  const result = arr.indexOf(1, idx);
  return result;
}
