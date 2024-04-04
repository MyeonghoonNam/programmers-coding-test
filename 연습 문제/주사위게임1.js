const a = 3;
const b = 5;

console.log(solution(a, b));

function solution(a, b) {
  const isOdd = (number) => {
    return number % 2 !== 0 ? true : false;
  };

  if (isOdd(a) && isOdd(b)) {
    return Math.pow(a, 2) + Math.pow(b, 2);
  }

  if (isOdd(a) || isOdd(b)) {
    return 2 * (a + b);
  }

  if (!isOdd(a) && !isOdd(b)) {
    return Math.abs(a - b);
  }
}
