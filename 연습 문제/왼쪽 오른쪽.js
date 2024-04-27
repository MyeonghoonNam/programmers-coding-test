const str_list = ["u", "u", "l", "r"];

console.log(solution(str_list));

function solution(str_list) {
  let result = [];
  let hasLorR = false;

  for (let i = 0; i < str_list.length; i += 1) {
    const str = str_list[i];

    if (str === "l") {
      result = str_list.slice(0, i);
      hasLorR = true;
      break;
    }

    if (str === "r") {
      result = str_list.slice(i + 1);
      hasLorR = true;
      break;
    }
  }

  return hasLorR ? result : [];
}
