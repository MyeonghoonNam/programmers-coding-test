const my_strings = ["progressive", "hamburger", "hammer", "ahocorasick"];
const parts = [
  [0, 4],
  [1, 2],
  [3, 5],
  [7, 7],
];

console.log(solution(my_strings, parts));

function solution(my_strings, parts) {
  const result = my_strings
    .map((v, i) => {
      const [start, end] = parts[i];
      return v.slice(start, end + 1);
    })
    .join("");

  return result;
}
