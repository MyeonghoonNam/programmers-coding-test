const solution = (numlist, n) => {
  return numlist.sort((a, b) => {
    const [aGab, bGab] = [Math.abs(a - n), Math.abs(b - n)];

    if (aGab === bGab) return b - a;

    return aGab - bGab;
  });
};

const numlist = [1, 2, 3, 4, 5, 6];
const n = 4;

console.log(solution(numlist, n));
