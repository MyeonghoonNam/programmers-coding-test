const ineq = "<";
const eq = "=";
const n = 20;
const m = 50;

console.log(solution(ineq, eq, n, m));

// 문제 2차 해결
// 조건 로직 가시화
function solution(ineq, eq, n, m) {
  const operations = {
    ">=": (n, m) => n >= m,
    "<=": (n, m) => n <= m,
    ">!": (n, m) => n > m,
    "<!": (n, m) => n < m,
  };

  const result = Number(operations[ineq + eq](n, m));

  return result;
}

// 문제 1차 해결
// function solution(ineq, eq, n, m) {
//   switch (eq) {
//     case "=": {
//       if (ineq === "<") {
//         return n <= m ? 1 : 0;
//       } else if (ineq === ">") {
//         return n >= m ? 1 : 0;
//       }
//     }

//     case "!": {
//       if (ineq === "<") {
//         return n < m ? 1 : 0;
//       } else if (ineq === ">") {
//         return n > m ? 1 : 0;
//       }
//     }
//   }
// }
