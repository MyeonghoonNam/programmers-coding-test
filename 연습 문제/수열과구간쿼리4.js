const arr = [0, 1, 2, 4, 3];
const queries = [
  [0, 4, 1],
  [0, 3, 2],
  [0, 3, 3],
];

console.log(solution(arr, queries));

function solution(arr, queries) {
  const result = [...arr];

  for (let [s, e, k] of queries) {
    for (let i = s; i <= e; i++) {
      if (i % k === 0) {
        result[i] += 1;
      }
    }
  }

  return result;
}
