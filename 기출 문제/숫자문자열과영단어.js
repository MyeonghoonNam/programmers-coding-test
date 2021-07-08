const s = 'one4oneeight';

console.log(solution(s));

function solution(s) {
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const splitStr = (s) => {
    let startIdx = 0;
    let lastIdx = 3;

    while (startIdx < s.length) {
      let str = s.slice(startIdx, lastIdx);
      if (obj[str]) {
        result.push(obj[str]);

        startIdx += lastIdx;
        lastIdx = 3;
      } else {
        lastIdx++;
      }
    }
  };

  const result = [];

  const reg = /([a-z]+)|\d/g;

  s = s.match(reg);

  for (let i = 0; i < s.length; i++) {
    if (!Number.isInteger(Number(s[i])) && s[i].length < 6) {
      result.push(obj[s[i]]);
    } else if (Number.isInteger(Number(s[i]))) {
      result.push(Number(s[i]));
    } else {
      splitStr(s[i]);
    }
  }

  return Number(result.join(''));
}
