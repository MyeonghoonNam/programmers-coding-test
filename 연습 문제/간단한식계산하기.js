const binomial = "43 + 12";

console.log(solution(binomial));

function solution(binomial) {
  const OP_MAP = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
  };

  const [a, op, b] = binomial.split(" ");
  const result = OP_MAP[op](Number(a), Number(b));

  return result;
}
