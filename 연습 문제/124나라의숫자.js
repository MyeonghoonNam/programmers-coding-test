const n = 1;

console.log(solution(n));

function solution(n) {
  let result = '';

  while (n > 0) {
    switch (n % 3) {
      case 1:
        result = '1' + result;
        n = Math.floor(n / 3);

        break;
      case 2:
        result = '2' + result;
        n = Math.floor(n / 3);

        break;
      case 0:
        result = '4' + result;
        n = n / 3 - 1;

        break;
    }
  }

  return result;
}
