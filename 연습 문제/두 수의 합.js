const a = "582";
const b = "734";

console.log(solution(a, b));

function solution(a, b) {
  const result = String(BigInt(a) + BigInt(b));
  return result;
}
