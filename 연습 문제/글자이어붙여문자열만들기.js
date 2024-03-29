const my_string = "cvsgiorszzzmrpaqpe";
const index_list = [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7];

console.log(solution(my_string, index_list));

function solution(my_string, index_list) {
  const result = index_list.reduce((acc, cur) => acc + my_string[cur], "");

  return result;
}
