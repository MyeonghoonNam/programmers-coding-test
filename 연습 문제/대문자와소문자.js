const solution = (my_string) => {
  const result = [...my_string]
    .map((v) => (v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()))
    .join("");

  return result;
};

const my_string = "cccCCC";
console.log(solution(my_string));
