const N = 6;
const road = [
  [1, 2, 1],
  [1, 3, 2],
  [2, 3, 2],
  [3, 4, 3],
  [3, 5, 2],
  [3, 5, 3],
  [5, 6, 1],
];
const K = 4;

console.log(solution(N, road, K));

function solution(N, road, K) {
  var answer = 0;
  let arr = Array(N + 1).fill(Infinity);
  let adj = Array.from(Array(N + 1), () => Array());

  road.forEach((info) => {
    let a = info[0];
    let b = info[1];
    let c = info[2];

    adj[a].push({ to: b, weight: c });
    adj[b].push({ to: a, weight: c });
  });

  let check = [{ to: 1, weight: 0 }];
  arr[1] = 0;
  while (check.length) {
    let edge = check.pop();
    adj[edge.to].forEach((next) => {
      if (arr[next.to] > arr[edge.to] + next.weight) {
        arr[next.to] = arr[edge.to] + next.weight;
        check.push(next);
      }
    });
  }
  arr.forEach((e) => (e <= K ? ++answer : null));
  return answer;
}
