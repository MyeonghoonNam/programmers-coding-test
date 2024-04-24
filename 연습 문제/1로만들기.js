const num_list = [12, 4, 15, 1, 14];

console.log(solution(num_list));

// 1차 해결
// 중첩반복
function solution(num_list) {
  let result = 0;

  for (let num of num_list) {
    while (num !== 1) {
      if (num % 2 === 0) {
        num /= 2;
      } else if (num % 2 !== 0) {
        num = (num - 1) / 2;
      }

      result += 1;
    }
  }

  return result;
}
