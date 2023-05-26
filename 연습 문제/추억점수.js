// 2차 해결
// 고차 함수 적용
function solution(name, yearning, photo) {
  const result = photo.map((p) =>
    p.reduce((acc, cur) => (acc += yearning[name.indexOf(cur)] ?? 0), 0)
  );

  return result;
}

// 1차 해결
// function solution(name, yearning, photo) {
//   const N = name.length;
//   const P = photo.length;
//   const map = new Map();
//   const result = [];

//   for (let i = 0; i < N; i++) {
//     const person = name[i];
//     const value = yearning[i];

//     map.set(person, value);
//   }

//   for (let i = 0; i < P; i++) {
//     let sum = 0;

//     for (let j = 0; j < photo[i].length; j++) {
//       const person = photo[i][j];

//       if (map.get(person)) {
//         sum += map.get(person);
//       } else {
//         map.set(person, 0);
//       }
//     }

//     result.push(sum);
//   }

//   return result;
// }

const name = ["may", "kein", "kain", "radi"];
const yearning = [5, 10, 1, 3];
const photo = [
  ["may", "kein", "kain", "radi"],
  ["may", "kein", "brin", "deny"],
  ["kon", "kain", "may", "coni"],
];

console.log(solution(name, yearning, photo));
