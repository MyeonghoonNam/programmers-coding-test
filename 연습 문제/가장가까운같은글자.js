const solution = (s) => {
  const map = new Map();

  const result = [...s].map((v, i) => {
    const value = map.has(v) ? i - map.get(v) : -1;
    map.set(v, i);

    return value;
  });

  return result;
};

const s = "banana";
console.log(solution(s));
