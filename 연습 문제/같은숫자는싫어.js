const arr = [4, 4, 4, 3, 3];

console.log(solution(arr));

function solution(arr) {
  const result = [];

  arr.forEach((num, i) => {
    if (arr[i - 1] !== num) {
      result.push(num);
    }
  });

  return result;
}

// filter를 활용한 풀이
// function solution(arr)
// {
//     return arr.filter((val,idx) => val != arr[idx+1]);
// }
