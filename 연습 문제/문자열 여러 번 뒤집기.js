const my_string = "rermgorpsam";
const queries = [
  [2, 3],
  [0, 7],
  [5, 9],
  [6, 10],
];

console.log(solution(my_string, queries));

function solution(my_string, queries) {
  let result = my_string.split("");

  for (let [s, e] of queries) {
    const reverseStr = result.slice(s, e + 1).reverse();

    result.splice(s, e - s + 1);
    result.splice(s, 0, ...reverseStr);
  }

  return result.join("");
}
