let s = '{{1,2,3},{2,1},{1,2,4,3},{2}}';

console.log(solution(s));

function solution(s) {
  s = s.replace(/{{/g, '').replace(/}}/g, '').split('},{');

  for (let i = 0; i < s.length; i++) {
    s[i] = s[i].split(',').map(Number);
  }

  let map = new Map();

  s.forEach((el) => {
    el.forEach((num) => {
      if (map.has(num)) {
        map.set(num, map.get(num) + 1);
      } else {
        map.set(num, 1);
      }
    });
  });

  map = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

  const result = [...map.keys()];

  return result;
}
