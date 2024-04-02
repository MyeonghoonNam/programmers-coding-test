const num_list = [3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1];

console.log(solution(num_list));

function solution(num_list) {
  const result =
    num_list.length >= 11
      ? num_list.reduce((acc, cur) => acc + cur, 0)
      : num_list.reduce((acc, cur) => acc * cur, 1);

  return result;
}
