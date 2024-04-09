const arr = [1, 2, 3, 4, 5];
const intervals = [
  [1, 3],
  [0, 4],
];

console.log(solution(arr, intervals));

function solution(arr, intervals) {
  let result = [];

  for (let [start, end] of intervals) {
    result = result.concat(arr.slice(start, end + 1));
  }

  return result;
}
