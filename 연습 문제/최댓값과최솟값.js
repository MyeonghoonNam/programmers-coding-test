const s = '1 2 3 4';

console.log(solution(s));

function solution(s) {
  s = s.split(' ').map(Number);

  const max = Math.max(...s);
  const min = Math.min(...s);

  return `${min} ${max}`;
}
