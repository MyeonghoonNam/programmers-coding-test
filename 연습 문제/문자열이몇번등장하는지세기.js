const myString = "banana";
const pat = "aaa";

console.log(solution(myString, pat));

function solution(myString, pat) {
  let result = 0;
  let idx = myString.indexOf(pat);

  while (idx !== -1) {
    result += 1;
    idx = myString.indexOf(pat, idx + 1);
  }

  /**
   const reg = new RegExp(`(?=${pat})`, "g");
   const result = myString.match(reg)?.length || 0; // ['', ''] => 전방탐색기호 ?=를 통한 ana 전체 조회
   */

  return result;
}
