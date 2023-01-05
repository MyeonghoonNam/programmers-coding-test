const solution = (n, left, right) => {
  const result = [];

  let x = left % n;
  let y = parseInt(left / n);

  for (let i = 0; i <= right - left; i++) {
    result.push(Math.max(x, y) + 1);

    if (x + 1 < n) {
      x += 1;
    } else {
      y += 1;
      x = 0;
    }
  }

  return result;
};

const n = 3;
const left = 2;
const right = 5;

console.log(solution(n, left, right));
