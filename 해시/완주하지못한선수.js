const participant = ['mislav', 'stanko', 'mislav', 'ana'];
const completion = ['stanko', 'ana', 'mislav'];

let start = new Date();
console.log(Solution(participant, completion));
let end = new Date();

console.log(end - start);

// 해시를 활용한 구현
function Solution(participant, completion) {
  const map = new Map();

  for (let name of participant) {
    if (!map.has(name)) {
      map.set(name, 1);
    } else {
      const value = map.get(name);

      map.set(name, value + 1);
    }
  }

  for (let name of completion) {
    if (map.has(name)) {
      const value = map.get(name);

      map.set(name, value - 1);
    }
  }

  let result = '';
  map.forEach((value, key) => {
    if (value !== 0) {
      result = key;
    }
  });

  return result;
}

// 정렬을 활용한 구현
// function Solution(participant, completion) {
//   participant.sort();
//   completion.sort();

//   for (let i = 0; i < participant.length; i++) {
//     if (participant[i] !== completion[i]) {
//       return participant[i];
//     }
//   }
// }
