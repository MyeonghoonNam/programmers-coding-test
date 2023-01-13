const solution = (queue1, queue2) => {
  const q = [...queue1, ...queue2];
  const sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
  const sum2 = queue2.reduce((acc, cur) => acc + cur, 0);

  if (sum1 === sum2) {
    return 0;
  }

  if ((sum1 + sum2) % 2 !== 0) {
    return -1;
  }

  const half = (sum1 + sum2) / 2;

  let maxCount = q.length * 3;

  let start = 0;
  let end = queue1.length;
  let count = 0;

  let sum = q.slice(start, end).reduce((acc, cur) => acc + cur, 0);

  while (count <= maxCount) {
    if (sum < half) {
      sum += q[end];
      end++;
    } else if (sum > half) {
      sum -= q[start];
      start++;
    } else if (sum === half) {
      return count;
    }

    count++;
  }

  return -1;
};

const queue1 = [3, 2, 7, 2];
const queue2 = [4, 6, 5, 1];

console.log(solution(queue1, queue2));
