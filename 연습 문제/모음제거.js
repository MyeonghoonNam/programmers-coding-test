const solution = (my_string) => {
  const VOWERLS = ["a", "e", "i", "o", "u"];

  return [...my_string].filter((char) => !VOWERLS.includes(char)).join("");
};

const my_string = "bus";
console.log(solution(my_string));
