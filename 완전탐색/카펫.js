const brown = 10;
const yellow = 2;

console.log(solution(brown, yellow));

function solution(brown, yellow) {
  const totalCount = brown + yellow;

  for (let i = Math.floor(totalCount / 2); i > 0; i--) {
    if (totalCount % i !== 0) continue;

    const width = i;
    const height = totalCount / i;

    if ((width - 2) * (height - 2) === yellow) {
      return [width, height];
    }
  }
}
