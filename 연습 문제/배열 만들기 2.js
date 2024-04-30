const l = 5;
const r = 555;

console.log(solution(l, r));

// 문제 2차 해결
// 정규식
function solution(l, r) {
  const result = [];

  for (let i = l; i <= r; i += 1) {
    const filter = !/[^05]/.test(i);

    if (filter) {
      result.push(i);
    }
  }

  return result.length ? result : [-1];
}

// 문제 1차 해결
// every 조건 분기
// function solution(l, r) {
//   const result = [];

//   for (let i = l; i <= r; i += 1) {
//     const filter = String(i)
//       .split("")
//       .every((e) => e === "0" || e === "5");

//     if (filter) {
//       result.push(i);
//     }
//   }

//   return result.length ? result : [-1];
// }
