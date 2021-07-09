function solution(numbers) {
  return numbers.map((n) => {
    const res = fn(BigInt(n)).toString();
    return parseInt(res, 10);
  });
}

function fn(n) {
  if (BigInt(n) % 2n === 0n) return BigInt(n + 1n);
  const zero = BigInt(~n) & BigInt(n + 1n);
  return BigInt((BigInt(n) | zero) & ~(zero >> 1n));
}
