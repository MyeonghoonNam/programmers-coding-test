const nums = [1, 2, 7, 6, 4];

console.log(solution(nums));

function solution(nums) {
  const arr = [];
  const checked = new Array(nums.length).fill(false);
  let result = 0;

  const isPrime = (num) => {
    if (num < 2) return false;

    if (num === 2) return true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }

    return true;
  };

  const dfs = (idx, cnt) => {
    if (cnt === 3) {
      const sum = arr.reduce((acc, cur) => {
        return acc + cur;
      });

      if (isPrime(sum)) {
        result++;
      }

      return;
    }

    for (let i = idx; i < nums.length; i++) {
      if (!checked[i]) {
        checked[i] = true;
        arr[cnt] = nums[i];
        dfs(i, cnt + 1);
        checked[i] = false;
      }
    }
  };

  dfs(0, 0);

  return result;
}
