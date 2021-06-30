const arr = [4, 1, 2, 3];

console.log(solution(arr));

function solution(arr) {
  const min = Math.min(...arr);
  const idx = arr.indexOf(min);

  arr.splice(idx, 1);

  return arr.length ? arr : [-1];
}
