// 문자열도 슬라이스 적용 가능
const s = 'abcde';

console.log(solution(s));

function solution(s) {
  let idx = 0;

  if (s.length % 2 === 0) {
    // 짝수
    idx = s.length / 2 - 1;

    return s.slice(idx, idx + 2);
  } else {
    // 홀수
    idx = Math.floor(s.length / 2);

    return s.slice(idx, idx + 1);
  }
}
