const isPossibleBuild = (build) => {
  for (let i = 0; i < build.length; i++) {
    const [x, y, stuff] = build[i];

    if (stuff === 0) {
      // 기둥
      if (
        y === 0 ||
        findStuffPosition(build, x - 1, y, 1) ||
        findStuffPosition(build, x, y - 1, 0) ||
        findStuffPosition(build, x, y, 1)
      ) {
        continue;
      }

      return false;
    } else {
      // 보
      if (
        findStuffPosition(build, x, y - 1, 0) ||
        findStuffPosition(build, x + 1, y - 1, 0) ||
        (findStuffPosition(build, x - 1, y, 1) &&
          findStuffPosition(build, x + 1, y, 1))
      ) {
        continue;
      }

      return false;
    }
  }

  return true;
};

const findStuffPosition = (build, x, y, stuff) => {
  for (let i = 0; i < build.length; i++) {
    if (build[i][0] === x && build[i][1] === y && build[i][2] === stuff) {
      return true;
    }
  }

  return false;
};

const destroyStuff = (build, x, y, stuff) => {
  let temp = [...build];
  temp = temp.filter((el) => !(el[0] === x && el[1] === y && el[2] === stuff));

  return temp;
};

const solution = (n, build_frame) => {
  let result = [];

  build_frame.forEach((frame) => {
    const [x, y, a, b] = frame;

    if (b === 0) {
      // 삭제
      result = destroyStuff(result, x, y, a);

      if (!isPossibleBuild(result)) {
        result.push([x, y, a]);
      }
    } else {
      // 설치
      result.push([x, y, a]);

      if (!isPossibleBuild(result)) {
        result = destroyStuff(result, x, y, a);
      }
    }
  });

  result.sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] === b[1]) {
        return a[2] - b[2];
      }

      return a[1] - b[1];
    }

    return a[0] - b[0];
  });

  return result;
};

const n = 5;
const build_frame = [
  [0, 0, 0, 1],
  [2, 0, 0, 1],
  [4, 0, 0, 1],
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [2, 1, 1, 1],
  [3, 1, 1, 1],
  [2, 0, 0, 0],
  [1, 1, 1, 0],
  [2, 2, 0, 1],
];

console.log(solution(n, build_frame));
