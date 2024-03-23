const n = 0;
const control = "wsdawsdassw";

console.log(solution(n, control));

function solution(n, control) {
  const CONTROL_MAP = {
    w: 1,
    s: -1,
    d: 10,
    a: -10,
  };

  let result = n;

  for (let i = 0; i < control.length; i++) {
    result += CONTROL_MAP[control[i]];
  }

  return result;
}
