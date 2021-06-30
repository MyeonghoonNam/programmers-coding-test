const a = 3;
const b = 5;

console.log(solution(a, b));

function solution(a, b) {
  if (a > b) {
    let temp = b;

    b = a;
    a = temp;
  }

  let sum = 0;

  for (let i = a; i <= b; i++) {
    sum += i;
  }

  return sum;
}

// 가우스의 공식 활용 : 두 정수 사이의 합
// ((y - x) + 1)(x + y) / 2 => x < y 의 경우
// function solution(a, b) {
//   const result = ((Math.abs(b - a) + 1) * (a + b)) / 2;

//   return result;
// }
