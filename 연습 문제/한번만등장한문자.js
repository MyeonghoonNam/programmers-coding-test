const solution = (s) => {
  const result = [];

  [...s].forEach((v) => {
    if (s.indexOf(v) === s.lastIndexOf(v)) {
      result.push(v);
    }
  });

  return result.sort().join("");
};

const s = "abcabcadc";
console.log(solution(s));
