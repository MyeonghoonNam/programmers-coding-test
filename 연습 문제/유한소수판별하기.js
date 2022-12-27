const getGCD = (a, b) => {
  while (b > 0) {
    let r = a % b;
    a = b;
    b = r;
  }

  return a;
};

const isPrime = (num) => {
  if (num === 2) {
    return true;
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const solution = (a, b) => {
  const measure = [];
  const primeFactor = [];

  const gcd = getGCD(a, b);

  a /= gcd;
  b /= gcd;

  if (a % b === 0) return 1;

  for (let i = 2; i <= b; i++) {
    if (b % i === 0) measure.push(i);
  }

  for (let i = 0; i < measure.length; i++) {
    const number = measure[i];

    if (isPrime(number)) primeFactor.push(number);
  }

  const result = primeFactor.filter((number) => number !== 2 && number !== 5)
    .length
    ? 2
    : 1;

  return result;
};

const a = 11;
const b = 22;

console.log(solution(a, b));
