const numbers = [5, 0, 2, 7];

console.log(solution(numbers));

function solution(numbers) {
  const set = new Set();

  const arr = [];
  const choiced = new Array(numbers.length).fill(false);

  const dfs = (idx, cnt) => {
    if (cnt === 2) {
      const sum = arr.reduce((acc, cur) => {
        return acc + cur;
      });

      if (!set.has(sum)) {
        set.add(sum);
      }

      return;
    }

    for (let i = idx; i < numbers.length; i++) {
      if (!choiced[i]) {
        choiced[i] = true;
        arr[cnt] = numbers[i];
        dfs(i, cnt + 1);
        choiced[i] = false;
      }
    }
  };

  dfs(0, 0);

  const result = [...set].sort((a, b) => a - b);

  return result;
}
