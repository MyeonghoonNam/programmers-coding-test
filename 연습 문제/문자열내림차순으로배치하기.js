const s = 'Zbcdefg';

console.log(solution(s));

function solution(s) {
  return Array.from(s)
    .sort((a, b) => (a > b ? -1 : 1))
    .join('');
}
