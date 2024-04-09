const number = "123";

console.log(solution(number));

function solution(number) {
  let result = 0;

  for (let num of number) {
    result += Number(num);
  }

  return result % 9;
}
