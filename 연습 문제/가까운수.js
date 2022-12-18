const solution = (array, n) => {
  array.push(n);
  array.sort((a, b) => a - b);

  let result = 0;

  array.forEach((value, index, arr) => {
    if (value === n) {
      const prev = arr[index - 1];
      const next = arr[index + 1];

      if (value - prev > next - value) {
        result = next;
      } else {
        result = prev;
      }
    }
  });

  return result;
};

const array = [3, 10, 12];
const n = 11;

console.log(solution(array, n));
