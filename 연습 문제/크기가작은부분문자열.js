const solution = (t, p) => {
  let result = 0;
  let number = 0;

  for (let i = 0; i < t.length - p.length + 1; i += 1) {
    number = t.slice(i, i + p.length);

    if (Number(number) <= Number(p)) {
      result += 1;
    }
  }

  return result;
};

const t = "3141592";
const p = "271";

console.log(solution(t, p));
