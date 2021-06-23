const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

console.log(solution(progresses, speeds));

function solution(progresses, speeds) {
  const stack = [];

  while (progresses.length) {
    stack.push([progresses.pop(), speeds.pop()]);
  }

  const result = [];

  while (stack.length) {
    stack.forEach((el) => {
      if (el[0] < 100) {
        el[0] += el[1];
      }
    });

    let count = 0;
    while (stack.length && stack[stack.length - 1][0] >= 100) {
      stack.pop();
      count++;
    }

    if (count !== 0) {
      result.push(count);
      count = 0;
    }
  }

  return result;
}

// 다른 사람의 풀이
// 시간복잡도가 훨씬 개선되었다.
// function solution(progresses, speeds) {
//   let answer = [0];
//   let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
//   let maxDay = days[0];

//   for(let i = 0, j = 0; i< days.length; i++){
//       if(days[i] <= maxDay) {
//           answer[j] += 1;
//       } else {
//           maxDay = days[i];
//           answer[++j] = 1;
//       }
//   }

//   return answer;
// }
