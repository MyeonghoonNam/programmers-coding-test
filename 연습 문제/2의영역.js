const arr = [1, 1, 1];

console.log(solution(arr));

function solution(arr) {
  const firstIndex = arr.indexOf(2);
  const lastIndex = arr.lastIndexOf(2);
  const result = arr.slice(firstIndex, lastIndex + 1);

  return result.length ? result : [-1];
}
