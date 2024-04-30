const a = 2;
const b = 2;
const c = 2;
const d = 2;

console.log(solution(a, b, c, d));

function solution(a, b, c, d) {
  const arr = [a, b, c, d];
  const map = new Map();
  const set = new Set(arr);

  for (let number of arr) {
    const hasNumber = map.has(number);

    if (hasNumber) {
      map.set(number, {
        ...map.get(number),
        count: map.get(number).count + 1,
      });
    } else if (!hasNumber) {
      map.set(number, {
        number,
        count: 1,
      });
    }
  }

  // 4개 숫자 모두 같음
  if (set.size === 1) {
    return 1111 * b;
  }

  const mapValues = [...map.values()];

  // 3개 숫자 같고 1개 숫자만 다름 or 2개씩 숫자가 같은 경우
  if (set.size === 2) {
    const isSameThree = Math.max(...mapValues.map((e) => e.count)) === 3;

    if (isSameThree) {
      // 3개 숫자 같고 1개 숫자만 다름
      const [p, q] = mapValues
        .sort((a, b) => b.count - a.count)
        .map((e) => e.number);

      return Math.pow(10 * p + q, 2);
    } else {
      // 2개씩 숫자가 같은 경우
      const [p, q] = mapValues.map((e) => e.number);
      return (p + q) * Math.abs(p - q);
    }
  }

  // 2개 숫자 같고, 나머지 2개 숫자는 각기 다름
  if (set.size === 3) {
    const [q, r] = mapValues
      .sort((a, b) => a.count - b.count)
      .map((e) => e.number);

    return q * r;
  }

  // 4객 숫자 모두 각기 다름
  if (set.size === 4) {
    return Math.min(...mapValues.map((e) => e.number));
  }
}
