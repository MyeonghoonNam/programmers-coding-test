const picture = [
  ".xx...xx.",
  "x..x.x..x",
  "x...x...x",
  ".x.....x.",
  "..x...x..",
  "...x.x...",
  "....x....",
];
const k = 2;

console.log(solution(picture, k));

function solution(picture, k) {
  const result = [];

  picture.map((e) => {
    const resized = [...e].map((s) => s.repeat(k)).join("");

    for (let i = 0; i < k; i += 1) {
      result.push(resized);
    }
  });

  return result;
}
