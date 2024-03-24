const start_num = 10;
const end_num = 3;

console.log(solution(start_num, end_num));

function solution(start_num, end_num) {
  const result = Array.from(
    new Array(start_num - end_num + 1),
    () => start_num--
  );
  return result;
}
