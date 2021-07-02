const arr1 = [
  [1, 4],
  [3, 2],
];
const arr2 = [
  [3, 3],
  [3, 3],
];

console.log(solution(arr1, arr2));

function solution(arr1, arr2) {
  const result = Array.from(new Array(arr1.length), () =>
    new Array(arr2[0].length).fill(0)
  );

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      for (let k = 0; k < arr2.length; k++) {
        result[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return result;
}
