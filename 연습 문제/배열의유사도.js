const solution = (s1, s2) => {
  const result = s1.filter((v) => s2.includes(v)).length;

  return result;
};

const s1 = ["a", "b", "c"];
const s2 = ["com", "b", "d", "p", "c"];

console.log(solution(s1, s2));
