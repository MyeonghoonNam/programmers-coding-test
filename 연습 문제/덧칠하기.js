const solution = (n, m, section) => {
  let result = 0;
  let target = 0;

  for (let i = 0; i < section.length; i++) {
    const position = section[i];

    if (position < target) continue;

    result += 1;
    target = position + m;
  }

  return result;
};

const n = 8;
const m = 4;
const section = [2, 3, 6];

console.log(solution(n, m, section));
