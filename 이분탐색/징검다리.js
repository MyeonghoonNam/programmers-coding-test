const solution = (distance, rocks, n) => {
  rocks = rocks.sort((a, b) => a - b);

  let result = 0;
  let low = 0;
  let high = distance;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    let removeRockCount = 0;
    let position = 0;

    rocks.forEach((rock) => {
      if (rock - position <= mid) {
        removeRockCount++;
      } else {
        position = rock;
      }
    });

    if (removeRockCount > n) {
      high = mid - 1;
    } else {
      low = mid + 1;

      if (result < low) {
        result = low;
      }
    }
  }

  return result;
};

const distance = 25;
const rocks = [2, 14, 11, 21, 17];
const n = 2;

console.log(solution(distance, rocks, n));
