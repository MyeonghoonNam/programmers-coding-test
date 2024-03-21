const start_num = 3;
const end_num = 10;

console.log(solution(start_num, end_num));

function solution(start_num, end_num) {
  const result = Array.from(
    new Array(end_num - start_num + 1),
    () => start_num++
  );

  return result;
}
