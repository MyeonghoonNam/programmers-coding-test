const arr = [0, 1, 1, 1, 1];
const k = 4;

console.log(solution(arr, k));

function solution(arr, k) {
  const set = new Set(arr);
  const result = [...set].slice(0, k);

  return result.length < k
    ? result.concat(new Array(k - result.length).fill(-1))
    : result;
}
