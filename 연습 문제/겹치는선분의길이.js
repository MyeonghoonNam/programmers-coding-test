const solution = (lines) => {
  const duplicationAreaLengthArr = new Array(200).fill(0);

  for (let i = 0; i < lines.length; i++) {
    for (let j = lines[i][0]; j < lines[i][1]; j++) {
      duplicationAreaLengthArr[j + 100] += 1;
    }
  }

  const result = duplicationAreaLengthArr.filter((v) => v > 1).length;

  return result;
};

const lines = [
  [0, 1],
  [2, 5],
  [3, 9],
];
console.log(solution(lines));
