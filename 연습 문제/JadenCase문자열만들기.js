const s = '3people unFollowed me';

console.log(solution(s));

function solution(s) {
  s = s.toLowerCase();

  const reg1 = /\b[a-z]/g;

  return s.replace(reg1, (x) => x[0].toUpperCase());
}
