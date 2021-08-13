// 라이브러리
function filter(f) {
  return function* (iter) {
    for (const a of iter) if (f(a)) yield a;
  };
}

function reduce(f) {
  return function (acc, iter) {
    if (!iter) acc = (iter = acc[Symbol.iterator]()).next().value;
    for (const a of iter) acc = f(acc, a);
    return acc;
  };
}

function go(arg, ...fs) {
  return reduce((arg, f) => f(arg))(arg, fs);
}

const head = ([a]) => a;

const find = (f) => (iter) => head(filter(f)(iter));

function inc(parent, k) {
  parent[k] ? parent[k]++ : (parent[k] = 1);
  return parent;
}

const countBy = (f) => (iter) =>
  reduce((counts, a) => inc(counts, f(a)))({}, iter);

const identity = (a) => a;

const count = countBy(identity);

function* entries(obj) {
  for (const k in obj) yield [k, obj[k]];
}

// 함수 시작
const participant = ['mislav', 'stanko', 'mislav', 'ana'];
const completion = ['stanko', 'ana', 'mislav'];

console.log(solution(participant, completion));

/*
깨달은 점

해시 자료구조를 활용하여 접근하는 방법은 풀이와 비슷했던 것 같습니다.
입력 받은 변수 상태를 변경시키려고 재선언을 통해 시도하였는데

const solution = (participant, completion) =>
    failerName(count(participant), count(completion));

const failerName = (participant, completion) => go(
    participant,
    entries,
    find(([name, count]) => (completion[name] || 0) < count),
    head
);

함수를 활용하여 인자에서 변경하는 풀이 코드를 보며 아직 내가 함수 활용도가 떨어진다고 생각하게 되었습니다.
*/

// 시도 코드
function solution(participant, completion) {
  participant = count(participant);
  completion = count(completion);

  return go(
    participant,
    entries,
    find(([name, count]) => (completion[name] || 0) < count),
    head
  );
}

// 해시를 활용한 구현
// function Solution(participant, completion) {
//   const map = new Map();

//   for (let name of participant) {
//     if (!map.has(name)) {
//       map.set(name, 1);
//     } else {
//       const value = map.get(name);

//       map.set(name, value + 1);
//     }
//   }

//   for (let name of completion) {
//     if (map.has(name)) {
//       const value = map.get(name);

//       map.set(name, value - 1);
//     }
//   }

//   let result = '';
//   map.forEach((value, key) => {
//     if (value !== 0) {
//       result = key;
//     }
//   });

//   return result;
// }

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
