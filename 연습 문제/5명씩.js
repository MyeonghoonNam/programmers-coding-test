const names = ["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"];

console.log(solution(names));

function solution(names) {
  const MAX_COUNT = 5;
  const result = names.filter((_, i) => i % MAX_COUNT === 0);

  return result;
}
