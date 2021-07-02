const arr = [2, 6, 8, 14];

console.log(solution(arr));

function solution(arr) {
  const gcd = (a, b) => {
    while (b !== 0) {
      const r = a % b;

      a = b;
      b = r;
    }

    return a;
  };

  const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
  };

  let result = 1;

  for (let i = 0; i < arr.length; i++) {
    result = lcm(result, arr[i]);
  }

  return result;
}
