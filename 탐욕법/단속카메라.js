function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);

  let result = 0;
  let lastCamPosition = -30000;

  routes.forEach((route) => {
    if (lastCamPosition < route[0]) {
      lastCamPosition = route[1];
      result += 1;
    }
  });

  return result;
}

const routes = [
  [-20, -15],
  [-14, -5],
  [-18, -13],
  [-5, -3],
];

console.log(solution(routes));
