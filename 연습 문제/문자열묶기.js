const strArr = ["a", "bc", "d", "efg", "hi"];

console.log(solution(strArr));

// 문제 2차 해결
// Object 활용
function solution(strArr) {
  const obj = {};

  for (let str of strArr) {
    const strLen = str.length;

    if (obj[strLen]) {
      obj[strLen] = [...obj[strLen], str];
    } else {
      obj[strLen] = [str];
    }
  }

  const result = Math.max(...Object.values(obj).map((v) => v.length));

  return result;
}

// 문제 1차 해결
// Map 활용
// function solution(strArr) {
//   const map = new Map();

//   for (let str of strArr) {
//     const strLen = str.length;

//     if (map.has(strLen)) {
//       map.set(strLen, [...map.get(strLen), str]);
//     } else {
//       map.set(strLen, [str]);
//     }
//   }

//   const result = Math.max(...[...map.values()].map((v) => v.length));

//   return result;
// }
