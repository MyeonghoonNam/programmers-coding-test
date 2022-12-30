// ex) num = 4 / total = 14

// total / num = 3.5
// num / 2 = 2
// 3.5 - 2 = 1.5를 올림 처리해서 초기 값은 2

const solution = (num, total) => {
  const min = Math.ceil(total / num - Math.floor(num / 2));
  const result = Array.from(new Array(num), (_, i) => i + min);

  return result;
};

const num = 3;
const total = 12;

console.log(solution(num, total));
