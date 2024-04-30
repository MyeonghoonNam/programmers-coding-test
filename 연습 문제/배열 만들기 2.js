const l = 5;
const r = 555;

console.log(solution(l, r));

function solution(l, r) {
  const result = [];

  for (let i = l; i <= r; i += 1) {
    const filter = String(i)
      .split("")
      .every((e) => e === "0" || e === "5");

    if (filter) {
      result.push(i);
    }
  }

  return result.length ? result : [-1];
}
