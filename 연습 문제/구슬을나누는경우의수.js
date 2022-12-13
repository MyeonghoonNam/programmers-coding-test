const solution = (balls, share) => {
  const result =
    factorial(balls) / (factorial(share) * factorial(balls - share));

  return result;
};

const factorial = (number) => {
  if (BigInt(number) === BigInt(1) || BigInt(number) === BigInt(0)) {
    return BigInt(1);
  }

  return BigInt(number) * factorial(BigInt(number) - BigInt(1));
};

const balls = 3;
const share = 2;

console.log(solution(balls, share));
