const solution = (age) => {
  const result = String(age)
    .split("")
    .map((number) => String.fromCharCode(Number(number) + 97))
    .join("");

  return result;
};

const age = 23;
console.log(solution(age));
