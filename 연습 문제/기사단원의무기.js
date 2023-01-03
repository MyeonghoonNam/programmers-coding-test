/**
 * 각 기사는 1~number 까지 번호 지정되어있다.
 * 각 기사는 자신의 기사 번호의 약수 개수에 해당하는 무기 구매하려한다.
 * 단, 공격력의 제한수치가 존재하고, 제한수치보다 큰 공격력을 가진 무기를 구매해야하는 기사는 정해준 공격력을 가지는 무기를 구매해야한다.
 *
 * 약수의 개수가 limit을 넘으면 지정된 power의 공격력 무기 구매
 * 약수의 개수가 limit을 넘지 않으면 약수의 개수만큼의 공격력 무기 구매
 */

const getDivisorCount = (number) => {
  const divisors = [];

  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      divisors.push(i);

      if (number / i !== i) {
        divisors.push(number / i);
      }
    }
  }

  return divisors.length;
};

const solution = (number, limit, power) => {
  const divisorCountArr = [];

  for (let i = 1; i <= number; i++) {
    const count = getDivisorCount(i);
    divisorCountArr.push(count);
  }

  const result = divisorCountArr
    .map((count) => (count > limit ? power : count))
    .reduce((acc, cur) => acc + cur, 0);

  return result;
};

const number = 5;
const limit = 3;
const power = 2;

console.log(solution(number, limit, power));
