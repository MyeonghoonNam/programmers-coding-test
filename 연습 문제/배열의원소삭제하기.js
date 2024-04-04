const arr = [293, 1000, 395, 678, 94];
const delete_list = [94, 777, 104, 1000, 1, 12];

console.log(solution(arr, delete_list));

function solution(arr, delete_list) {
  const result = arr.filter((v) => !delete_list.includes(v));
  return result;
}
