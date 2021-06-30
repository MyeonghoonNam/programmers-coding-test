const arr = 10;

console.log(solution(arr));

function solution(arr) {
  let temp = arr;
  let sum = 0;

  while (temp !== 0) {
    sum += temp % 10;
    temp = Math.floor(temp / 10);
  }

  return arr % sum === 0 ? true : false;
}
