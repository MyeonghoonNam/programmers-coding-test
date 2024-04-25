const arr = [0, 1, 2, 3, 4];
const queries = [
  [0, 3],
  [1, 2],
  [1, 4],
];

console.log(solution(arr, queries));

function solution(arr, queries) {
  const result = [...arr];

  for (let [i, j] of queries) {
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}
