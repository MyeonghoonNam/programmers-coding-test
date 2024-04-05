const todo_list = ["problemsolving", "practiceguitar", "swim", "studygraph"];
const finished = [true, false, true, false];

console.log(solution(todo_list, finished));

function solution(todo_list, finished) {
  const result = todo_list.filter((_, i) => !finished[i]);
  return result;
}
