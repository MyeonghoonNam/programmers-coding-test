const my_string = "banana";

console.log(solution(my_string));

function solution(my_string) {
  const result = [];

  for (let i = 1; i <= my_string.length; i++) {
    const suffix = my_string.slice(-i);
    result.push(suffix);
  }

  return result.sort();
}
