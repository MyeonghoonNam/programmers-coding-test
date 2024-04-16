const my_string = "apporoograpemmemprs";
const indices = [1, 16, 6, 15, 0, 10, 11, 3];

console.log(solution(my_string, indices));

function solution(my_string, indices) {
  let new_my_string = [...my_string];

  for (let idx of indices) {
    new_my_string[idx] = "";
  }

  return new_my_string.join("");
}
