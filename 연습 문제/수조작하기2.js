const numLog = [0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1];

console.log(solution(numLog));

function solution(numLog) {
  let result = "";

  const CONTROLLER = {
    [1]: "w",
    [-1]: "s",
    [10]: "d",
    [-10]: "a",
  };

  for (let i = 0; i < numLog.length - 1; i++) {
    const first = numLog[i];
    const second = numLog[i + 1];

    const diff = second - first;

    result += CONTROLLER[diff];
  }

  return result;
}
