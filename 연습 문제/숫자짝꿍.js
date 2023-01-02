const solution = (X, Y) => {
  const arrX = X.split("");
  let countX = new Array(10).fill(0);

  arrX.forEach((item) => {
    countX[item]++;
  });

  const arrY = Y.split("");
  let countY = new Array(10).fill(0);

  arrY.forEach((item) => {
    countY[item]++;
  });

  let result = [];

  countX.forEach((item, index) => {
    if (item !== 0 && countY[index] !== 0) {
      const min = Math.min(item, countY[index]);

      result.push(String(index).repeat(min));
    }
  });

  if (result.length === 0) {
    return "-1";
  }

  if (Number(result.join("")) === 0) {
    return "0";
  }

  return result.reverse().join("");
};

const X = "100";
const Y = "203045";

console.log(solution(X, Y));
