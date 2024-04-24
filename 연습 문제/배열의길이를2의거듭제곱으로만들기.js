const arr = [1, 2, 3, 4, 5, 6];

console.log(solution(arr));

function solution(arr) {
  // arr 길이보다 큰 2의 거듭제곱 수 구하기
  let pow = 1;
  while (pow < arr.length) {
    pow *= 2;
  }

  const diff = pow - arr.length;
  const result = arr.concat(new Array(diff).fill(0));

  /**
   const length = arr.length;
   const totalLength = 2 ** Math.ceil(Math.log2(length));
   
   return [...arr, ...new Array(totalLength - length).fill(0)];
   */

  return result;
}
