const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const solution = (n, k) => {
  let result = 0;
  const numbers = n.toString(k).split(0);

  numbers.forEach((num) => {
    if (isPrime(Number(num))) {
      result += 1;
    }
  });

  return result;
};

const n = 110011;
const k = 10;

console.log(solution(n, k));
