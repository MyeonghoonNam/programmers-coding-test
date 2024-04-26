const q = 3;
const r = 1;
const code = "qjnwezgrpirldywt";

console.log(solution(q, r, code));

function solution(q, r, code) {
  const result = [...code].filter((_, i) => i % q === r).join("");
  return result;
}
