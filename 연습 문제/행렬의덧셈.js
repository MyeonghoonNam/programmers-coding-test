const arr1 = [[1], [2]];
const arr2 = [[3], [4]];

console.log(solution(arr1, arr2));

function solution(arr1, arr2) {
  const result = Array.from(new Array(arr1.length), () => new Array());

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      result[i][j] = arr1[i][j] + arr2[i][j];
    }
  }

  return result;
}

// map 활용 풀이 => 2중 반복문 보다 속도는 느리다.
// function solution(arr1, arr2) {
//   const result = arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));

//   return result;
// }
