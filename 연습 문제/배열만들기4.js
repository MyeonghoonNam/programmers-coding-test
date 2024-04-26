const arr = [1, 4, 2, 5, 3];

console.log(solution(arr));

function solution(arr) {
  const stk = [];
  let i = 0;

  while (i < arr.length) {
    if (stk.length !== 0 && stk[stk.length - 1] >= arr[i]) {
      stk.pop();
      continue;
    }

    if (stk.length === 0) {
      stk.push(arr[i]);
    } else if (stk.length !== 0 && stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i]);
    }

    i += 1;
  }

  return stk;
}
