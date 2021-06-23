const numbers = [1, 1, 1, 1, 1];
const target = 3;

console.log(solution(numbers, target));

function solution(numbers, target) {
  let result = 0;

  const dfs = (idx, sum) => {
    if (idx === numbers.length) {
      if (sum === target) {
        result++;
      }
      return;
    }

    dfs(idx + 1, sum + numbers[idx]);
    dfs(idx + 1, sum - numbers[idx]);
  };

  dfs(0, 0);

  return result;
}
