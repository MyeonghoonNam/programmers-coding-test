const solution = (k, tangerine) => {
  const map = new Map();
  let sum = 0;
  let result = 0;

  tangerine.forEach((size) => {
    map.set(size, map.has(size) ? map.get(size) + 1 : 1);
  });

  const count = [...map.values()].sort((a, b) => b - a);

  for (let c of count) {
    result += 1;
    sum += c;

    if (sum >= k) break;
  }

  return result;
};

const k = 6;
const tangerine = [1, 3, 2, 5, 4, 5, 2, 3];

console.log(solution(k, tangerine));
