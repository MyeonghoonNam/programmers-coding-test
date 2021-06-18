const clothes = [
  ['crowmask', 'face'],
  ['bluesunglasses', 'face'],
  ['smoky_makeup', 'face'],
];

console.log(Solution(clothes));

function Solution(clothes) {
  const hash = {};

  for (let cloth of clothes) {
    const type = cloth[1];

    if (hash[type]) {
      hash[type]++;
    } else {
      hash[type] = 1;
    }
  }

  const result = Object.values(hash)
    .map((el) => {
      return el + 1;
    })
    .reduce((acc, cur) => {
      return acc * cur;
    });

  return result - 1;
}
