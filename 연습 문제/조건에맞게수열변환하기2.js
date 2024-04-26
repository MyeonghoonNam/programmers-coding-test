const arr = [1, 2, 3, 100, 99, 98];

console.log(solution(arr));

function solution(arr) {
  let current = [...arr];
  let result = 0;

  while (true) {
    const next = current.map((v) => {
      if (v >= 50 && v % 2 === 0) {
        return v / 2;
      }

      if (v < 50 && v % 2 !== 0) {
        return v * 2 + 1;
      }

      return v;
    });

    if (JSON.stringify(current) === JSON.stringify(next)) {
      return result;
    }

    current = next;
    result += 1;
  }
}
