const arr = [
  [5, 192, 33],
  [192, 72, 95],
  [33, 95, 999],
];

console.log(solution(arr));

function solution(arr) {
  const N = arr.length;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] !== arr[j][i]) {
        return 0;
      }
    }
  }

  return 1;
}
