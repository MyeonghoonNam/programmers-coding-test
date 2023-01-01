const solution = (a, b, n) => {
  let result = 0;

  while (n >= a) {
    const cola = parseInt(n / a) * b;

    result += cola;
    n = (n % a) + cola;
  }

  return result;
};

const a = 3;
const b = 2;
const n = 20;

console.log(solution(a, b, n));
