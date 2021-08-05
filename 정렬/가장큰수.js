const numbers = [6, 10, 2];

console.log(solution(numbers));

function solution(numbers) {
  numbers = numbers.map((value) => {
    return value.toString();
  });

  numbers.sort((a, b) => {
    return b + a - (a + b);
  });

  return numbers[0] === '0' ? '0' : numbers.join('');
}
