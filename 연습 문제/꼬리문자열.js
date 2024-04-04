const str_list = ["abc", "def", "ghi"];
const ex = "ef";

console.log(solution(str_list, ex));

function solution(str_list, ex) {
  const result = str_list.reduce(
    (acc, cur) => acc + (cur.includes(ex) ? "" : cur),
    ""
  );
  return result;
}
