const arr = [5, 1, 4];

console.log(solution(arr));

function solution(arr) {
  const result = arr.map((v) => new Array(v).fill(v)).flat();
  return result;
}
