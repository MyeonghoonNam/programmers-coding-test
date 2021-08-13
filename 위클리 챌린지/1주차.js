const price = 3;
const money = 20;
const count = 4;

console.log(solution(price, money, count));

function solution(price, money, count) {
  for (let i = 0; i <= count; i++) {
    money -= price * i;
  }

  return money < 0 ? money * -1 : 0;
}
