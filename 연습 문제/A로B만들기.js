const solution = (before, after) => {
  const beforeArr = before.split("").sort();
  const afterArr = after.split("").sort();

  for (let i = 0; i < beforeArr.length; i++) {
    const beforeArrChar = beforeArr[i];
    const afterArrChar = afterArr[i];

    if (beforeArrChar !== afterArrChar) return 0;
  }

  return 1;
};

const before = "olleh";
const after = "hello";

console.log(solution(before, after));
