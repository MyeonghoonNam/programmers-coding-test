const numbers = [0, 0];

console.log(solution(numbers));

function solution(numbers) {
  const result = numbers.map((num) => {
    return num.toString();
  });

  result.sort((a, b) => {
    return b + a - (a + b);
  });

  return result[0] === '0' ? '0' : result.join('');
}
