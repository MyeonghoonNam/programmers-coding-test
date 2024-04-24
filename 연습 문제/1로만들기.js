const num_list = [12, 4, 15, 1, 14];

console.log(solution(num_list));

// 3차 해결
// DP
function solution(num_list) {
  let result = 0;

  for (let num of num_list) {
    const DP = new Array(num + 1).fill(0);

    for (let i = 2; i <= num; i++) {
      if (i % 2 === 0) {
        DP[i] = DP[i / 2] + 1;
      } else if (i % 2 !== 0) {
        DP[i] = DP[(i - 1) / 2] + 1;
      }
    }

    result += DP[num];
  }

  return result;
}

// 2차 해결
// 2진수 길이 - 1 => 절반으로 나누어 1을 만드는 연산 수
// function solution(num_list) {
//   const result = num_list
//     .map((v) => v.toString(2).length - 1)
//     .reduce((acc, cur) => acc + cur, 0);

//   return result;
// }

// 1차 해결
// 중첩반복
// function solution(num_list) {
//   let result = 0;

//   for (let num of num_list) {
//     while (num !== 1) {
//       if (num % 2 === 0) {
//         num /= 2;
//       } else if (num % 2 !== 0) {
//         num = (num - 1) / 2;
//       }

//       result += 1;
//     }
//   }

//   return result;
// }
