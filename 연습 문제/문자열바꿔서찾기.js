const myString = "ABBAA";
const pat = "AABB";

console.log(solution(myString, pat));

function solution(myString, pat) {
  const result = [...myString]
    .map((v) => (v === "A" ? "B" : "A"))
    .join("")
    .includes(pat)
    ? 1
    : 0;

  return result;
}
