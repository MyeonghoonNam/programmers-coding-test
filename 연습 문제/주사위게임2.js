const a = 2;
const b = 6;
const c = 1;

console.log(solution(a, b, c));

function solution(a, b, c) {
  const opSet = new Set([a, b, c]);
  const opMap = new Map([
    [1, 3], // set 크기가 1이면 모든 요소가 같음
    [2, 2], // set 크기가 2이면 2개 요소가 같음
    [3, 1], // set 크기가 3이면 모든 요소가 다름
  ]);

  const getCalculate = (pow) => {
    const value = Math.pow(a, pow) + Math.pow(b, pow) + Math.pow(c, pow);
    return pow === 1 ? value : value * getCalculate(pow - 1);
  };

  const result = getCalculate(opMap.get(opSet.size));

  return result;
}
