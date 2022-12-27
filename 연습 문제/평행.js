const solution = (dots) => {
  const leanArr = [];

  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      // 두 점의 y좌표차이 / x좌표차이 = 기울기
      const lean = (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]);

      if (leanArr.includes(lean)) {
        return 1;
      }

      leanArr.push(lean);
    }
  }

  return 0;
};

const dots = [
  [1, 4],
  [9, 2],
  [3, 8],
  [11, 6],
];
console.log(solution(dots));
