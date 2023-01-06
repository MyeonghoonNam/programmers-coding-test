const solution = (n, t, m, p) => {
  let result = "";
  let str = "";

  for (let i = 0; str.length < t * m; i++) {
    str += i.toString(n).toUpperCase();
  }

  for (let i = p - 1; i < t * m; i += m) {
    result += str[i];
  }

  return result;
};

const n = 2;
const t = 4;
const m = 2;
const p = 1;

console.log(solution(n, t, m, p));
