const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

console.log(solution(n, arr1, arr2));

function solution(n, arr1, arr2) {
  const map1 = [];
  const map2 = [];
  const sumMap = Array.from(new Array(n), () => new Array(n).fill(0));

  arr1.forEach((num, i) => {
    map1[i] = Array.from(num.toString(2).padStart(n, '0'));
  });

  arr2.forEach((num, i) => {
    map2[i] = Array.from(num.toString(2).padStart(n, '0'));
  });

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sumMap[i][j] = map1[i][j] === '1' || map2[i][j] === '1' ? '#' : ' ';
    }
  }

  return sumMap.map((arr) => {
    return arr.join('');
  });
}
