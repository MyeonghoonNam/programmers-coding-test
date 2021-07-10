const s = '1111111';

console.log(solution(s));

function solution(s) {
  let changeCount = 0;
  let deleteCount = 0;

  while (true) {
    if (s === '1') {
      break;
    }

    const reg = /0/g;

    if (s.match(reg)) {
      deleteCount += s.match(reg).length;
    }

    s = s.replace(reg, '').length.toString(2);

    changeCount++;
  }

  return [changeCount, deleteCount];
}
