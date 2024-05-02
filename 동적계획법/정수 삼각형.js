const triangle = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];

console.log(solution(triangle));

function solution(triangle) {
  for (let i = 1; i < triangle.length; i += 1) {
    for (let j = 0; j < triangle[i].length; j += 1) {
      if (j === 0) {
        // 처음 열
        triangle[i][j] += triangle[i - 1][j];
      } else if (0 < j && j < i) {
        // 처음 열과 마지막 열 사이
        triangle[i][j] += Math.max(triangle[i - 1][j - 1], triangle[i - 1][j]);
      } else if (j === i) {
        // 마지막 열
        triangle[i][j] += triangle[i - 1][j - 1];
      }
    }
  }

  const result = Math.max(...triangle[triangle.length - 1]);

  return result;
}
