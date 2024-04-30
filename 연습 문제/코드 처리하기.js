const code = "abc1abc1abc";

console.log(solution(code));

function solution(code) {
  let ret = "";
  let mode = 0;

  for (let i = 0; i < code.length; i += 1) {
    const char = code[i];

    if (char === "1") {
      mode === 0 ? (mode = 1) : (mode = 0);
    }

    if (char !== "1" && i % 2 === mode) {
      ret += char;
    }
  }

  return ret.length ? ret : "EMPTY";
}
