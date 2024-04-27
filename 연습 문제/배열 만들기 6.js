const arr = [0, 1, 1, 1, 0];

console.log(solution(arr));

function solution(arr) {
  const stk = [];

  let i = 0;
  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i += 1;
      continue;
    }

    if (stk.length !== 0) {
      if (stk[stk.length - 1] === arr[i]) {
        stk.pop();
      } else {
        stk.push(arr[i]);
      }

      i += 1;
    }
  }

  const result = stk.length !== 0 ? stk : [-1];

  return result;
}
