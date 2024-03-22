const arr = [1, 2, 3, 100, 99, 98];

console.log(solution(arr));

function solution(arr) {
  const result = arr.map((v) => {
    if (v >= 50 && v % 2 === 0) {
      return v / 2;
    }

    if (v < 50 && v % 2 !== 0) {
      return v * 2;
    }

    return v;
  });

  return result;
}
