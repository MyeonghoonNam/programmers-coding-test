const arr = [
  [572, 22, 37],
  [287, 726, 384],
  [85, 137, 292],
  [487, 13, 876],
];

console.log(solution(arr));

function solution(arr) {
  const row = arr.length;
  const column = arr[0].length;

  if (row === column) {
    return arr;
  }

  if (row > column) {
    return arr.map((e) => e.concat(new Array(row - column).fill(0)));
  } else if (row < column) {
    return arr.concat(
      Array.from(new Array(column - row), () => new Array(column).fill(0))
    );
  }
}
