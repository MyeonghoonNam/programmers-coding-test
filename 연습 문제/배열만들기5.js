const intStrs = ["0123456789", "9876543210", "9999999999999"];
const k = 50000;
const s = 5;
const l = 5;

console.log(solution(intStrs, k, s, l));

function solution(intStrs, k, s, l) {
  const result = intStrs
    .map((v) => Number(v.slice(s, s + l)))
    .filter((v) => v > k);

  return result;
}
