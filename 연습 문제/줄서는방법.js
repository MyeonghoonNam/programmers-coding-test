const solution = (n, k) => {
  const result = [];
  const people = Array.from({ length: n }, (_, i) => i + 1);
  let caseNum = people.reduce((ac, v) => ac * v, 1);

  while (result.length < n) {
    caseNum = caseNum / people.length;
    result.push(...people.splice(Math.floor((k - 1) / caseNum), 1));
    k = k % caseNum;
  }

  return result;
};

const n = 3;
const k = 5;

console.log(solution(n, k));
