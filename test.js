// 부스트캠프 자가진단 문항 : 함수 구현

const arr = [3, 2, 4, 4, 2, 5, 2, 5, 5];

console.log(solution(arr));

function solution(arr) {
  const result = [];
  const map = new Map();

  arr.forEach((num) => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  });

  map.forEach((value) => {
    if (value > 1) {
      result.push(value);
    }
  });

  if (result.length === 0) {
    result.push(-1);
  }

  return result;
}
