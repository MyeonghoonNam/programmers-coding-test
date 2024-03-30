const strArr = ["AAA", "BBB", "CCC", "DDD"];

console.log(solution(strArr));

function solution(strArr) {
  const result = strArr.map((v, i) =>
    i % 2 === 0 ? v.toLowerCase() : v.toUpperCase()
  );
  return result;
}
