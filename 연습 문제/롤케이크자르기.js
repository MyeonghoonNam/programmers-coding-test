function solution(topping) {
  const slice1 = new Set();
  const slice2 = new Set(topping);
  let result = 0;

  const map = new Map();

  topping.forEach((t) => {
    if (map.has(t)) {
      map.set(t, map.get(t) + 1);
    } else {
      map.set(t, 1);
    }
  });

  topping.forEach((t) => {
    slice1.add(t);

    if (map.get(t) > 0) {
      map.set(t, map.get(t) - 1);

      if (map.get(t) === 0) {
        slice2.delete(t);
      }
    }

    if (slice1.size === slice2.size) {
      result += 1;
    }
  });

  return result;
}

const topping = [1, 2, 3, 1, 4];
console.log(solution(topping));
