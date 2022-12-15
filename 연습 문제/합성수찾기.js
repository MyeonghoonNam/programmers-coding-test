const solution = (n) => {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    let count = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count += 1;
      }
    }

    if (count >= 3) {
      result += 1;
    }
  }

  return result;
};

const n = 10;

console.log(solution(n));
