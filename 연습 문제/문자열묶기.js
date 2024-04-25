const strArr = ["a", "bc", "d", "efg", "hi"];

console.log(solution(strArr));

function solution(strArr) {
  const map = new Map();

  for (let str of strArr) {
    const strLen = str.length;

    if (map.has(strLen)) {
      map.set(strLen, [...map.get(strLen), str]);
    } else {
      map.set(strLen, [str]);
    }
  }

  const result = Math.max(...[...map.values()].map((v) => v.length));

  return result;
}
