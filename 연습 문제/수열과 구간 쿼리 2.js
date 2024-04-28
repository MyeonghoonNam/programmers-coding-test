const arr = [0, 1, 2, 4, 3];
const queries = [
  [0, 4, 2],
  [0, 3, 2],
  [0, 2, 2],
];

console.log(solution(arr, queries));

function solution(arr, queries) {
  const result = [];

  for (let [s, e, k] of queries) {
    const found = arr.slice(s, e + 1).filter((e) => e > k);

    if (!found.length) {
      result.push(-1);
    } else {
      result.push(Math.min(...found));
    }
  }

  return result;
}
