const w = 8;
const h = 12;

console.log(solution(w, h));

function solution(w, h) {
  const gcd = (a, b) => {
    while (b != 0) {
      const r = a % b;

      a = b;
      b = r;
    }

    return a;
  };

  return w * h - (w + h - gcd(w, h));
}
