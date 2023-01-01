const getCombination = (arr) => {
  const result = [];
  const selected = new Array(arr.length).fill(false);

  dfs(0, 0, arr, selected, result);

  return result;
};

const dfs = (idx, cnt, arr, selected, result) => {
  if (cnt === 3) {
    const temp = [];

    for (let i = 0; i < arr.length; i++) {
      if (selected[i] === true) {
        temp.push(arr[i]);
      }
    }

    result.push(temp);
  }

  for (let i = idx; i < arr.length; i++) {
    if (selected[i] === true) continue;

    selected[i] = true;
    dfs(i, cnt + 1, arr, selected, result);
    selected[i] = false;
  }
};

const solution = (number) => {
  const combination = getCombination(number);
  const result = combination.filter(
    (c) => c.reduce((acc, cur) => acc + cur, 0) === 0
  ).length;

  return result;
};

const number = [-2, 3, 0, 2, -5];
console.log(solution(number));
