const n = 125;

console.log(solution(n));

function solution(n) {
  let result = '';

  // 3진법 변환
  result = n.toString(3);

  // 앞뒤반전
  result = Array.from(result).reverse().join('');

  // 10진법 변환
  result = parseInt(result, 3);

  return result;
}
