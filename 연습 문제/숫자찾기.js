const solution = (num, k) => {
  const index = [...String(num)].indexOf(String(k));
  const result = index >= 0 ? index + 1 : index;

  return result;
};

const num = 29183;
const k = 7;

console.log(solution(num, k));
