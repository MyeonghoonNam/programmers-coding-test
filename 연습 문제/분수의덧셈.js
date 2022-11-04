function getGcd(num1, num2) {
  while (num2 !== 0) {
    let result = num1 % num2;
    num1 = num2;
    num2 = result;
  }

  return num1;
}

function solution(denum1, num1, denum2, num2) {
  const top = denum1 * num2 + denum2 * num1;
  const bottom = num1 * num2;
  const gcd = getGcd(top, bottom);

  return [top / gcd, bottom / gcd];
}

const denum1 = 9;
const num1 = 2;
const denum2 = 1;
const num2 = 3;

console.log(solution(denum1, num1, denum2, num2));
