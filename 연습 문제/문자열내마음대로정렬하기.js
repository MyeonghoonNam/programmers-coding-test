const strings = ['abce', 'abcd', 'cdx'];
const n = 2;

console.log(solution(strings, n));

function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    else if (a[n] < b[n]) return -1;
    else {
      if (a > b) return 1;
      else if (a < b) return -1;
    }
  });
}
