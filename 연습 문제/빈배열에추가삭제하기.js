const arr = [3, 2, 4, 1, 3];
const flag = [true, false, true, false, false];

console.log(solution(arr, flag));

function solution(arr, flag) {
  const result = [];

  const calculate = (mod, repeatCount, pushValue) => {
    while (repeatCount--) {
      if (mod === "push") {
        result.push(pushValue);
      }

      if (mod === "pop") {
        result.pop();
      }
    }
  };

  flag.map((v, i) =>
    v ? calculate("push", arr[i] * 2, arr[i]) : calculate("pop", arr[i])
  );

  return result;
}
