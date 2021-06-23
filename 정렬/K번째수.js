const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

console.log(solution(array, commands));

function solution(array, commands) {
  const result = [];

  for (let i = 0; i < commands.length; i++) {
    const cutArr = array.slice(commands[i][0] - 1, commands[i][1]);

    cutArr.sort((a, b) => a - b);

    result.push(cutArr[commands[i][2] - 1]);
  }

  return result;
}

// map의 활용 방법에 좀 더 숙지하게 되었다.
// function solution(array, commands) {
//   var answer = [];

//   answer = commands.map((a) => {
//     return array.slice(a[0] - 1, a[1]).sort((b, c) => b - c)[a[2] - 1];
//   });
//   return answer;
// }
