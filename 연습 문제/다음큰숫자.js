const n = 15;

console.log(solution(n));

function solution(n) {
  const originOneCount = Array.from(n.toString(2)).filter(
    (num) => num === '1'
  ).length;

  let result = n;

  while (true) {
    result++;

    const nextOneCount = Array.from(result.toString(2)).filter(
      (num) => num === '1'
    ).length;

    if (originOneCount === nextOneCount) {
      return result;
    }
  }
}
