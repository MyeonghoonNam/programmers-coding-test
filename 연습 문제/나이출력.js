const solution = (age) => {
  const BREAK_YEAR = 2022;
  const result = BREAK_YEAR - age + 1;

  return result;
};

const age = 40;
console.log(solution(age));
