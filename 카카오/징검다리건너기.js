const bninarySearch = (stones, mid, k) => {
  let count = 0;

  for (let i = 0; i < stones.length; i++) {
    if (stones[i] - mid <= 0) {
      count += 1;
    } else {
      count = 0;
    }

    if (count >= k) {
      return true;
    }
  }

  return false;
};

const solution = (stones, k) => {
  let left = 0;
  let right = 200000000;

  while (left <= right) {
    const mid = parseInt((left + right) / 2);

    if (bninarySearch(stones, mid, k)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

const stones = [2, 4, 5, 3, 2, 1, 4, 2, 5, 1];
const k = 3;

console.log(solution(stones, k));
