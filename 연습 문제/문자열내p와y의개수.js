const s = 'slk';

console.log(solution(s));

function solution(s) {
  const pReg = /p/gi;
  const yReg = /y/gi;

  const pCount = s.match(pReg) ? s.match(pReg).length : 0;
  const yCount = s.match(yReg) ? s.match(yReg).length : 0;

  const result = pCount === yCount ? true : false;

  return result;
}
