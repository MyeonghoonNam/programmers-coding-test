const solution = (my_string) => {
  const set = new Set(my_string);
  const result = [...set].join("");

  return result;
};

const my_string = "people";
console.log(solution(my_string));
