const solution = (my_str, n) => {
  const result = [];

  for (let i = 0; i < my_str.length; i += n) {
    result.push(my_str.slice(i, i + n));
  }

  return result;
};

const my_str = "abc1Addfggg4556b";
const n = 6;

console.log(solution(my_str, n));
