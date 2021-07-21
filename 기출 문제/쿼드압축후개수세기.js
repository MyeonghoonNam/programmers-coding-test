arr = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
];

console.log(solution(arr));

function solution(arr) {
  let zeroCount = 0;
  let oneCount = 0;

  const quadTree = (x, y, size) => {
    if (isPossible(x, y, size)) {
      return arr[x][y] ? oneCount++ : zeroCount++;
    }

    const newSize = size / 2;

    quadTree(x, y, newSize);
    quadTree(x, y + newSize, newSize);
    quadTree(x + newSize, y, newSize);
    quadTree(x + newSize, y + newSize, newSize);
  };

  const isPossible = (x, y, size) => {
    const value = arr[x][y];

    for (let i = x; i < x + size; i++) {
      for (let j = y; j < y + size; j++) {
        if (arr[i][j] !== value) return false;
      }
    }

    return true;
  };

  quadTree(0, 0, arr.length);

  return [zeroCount, oneCount];
}
