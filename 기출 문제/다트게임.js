const dartResult = '1D2S3T*';

console.log(solution(dartResult));

function solution(dartResult) {
  const reg = /[\d]+[SDT][*#]*/g;
  const input = dartResult.match(reg);
  const result = [];

  for (let i = 0; i < input.length; i++) {
    let number = input[i].match(/[\d]+/g)[0];
    const bonus = input[i].match(/[SDT]/g)[0];
    const option = input[i].match(/[*#]/g);

    switch (bonus) {
      case 'S':
        number = Number(number);
        break;
      case 'D':
        number = Math.pow(number, 2);
        break;
      case 'T':
        number = Math.pow(number, 3);
        break;
    }

    result[i] = number;

    if (option) {
      switch (option[0]) {
        case '*':
          result[i - 1] *= 2;
          result[i] *= 2;
          break;
        case '#':
          result[i] *= -1;
          break;
      }
    }
  }

  return result.reduce((acc, cur) => {
    return acc + cur;
  });
}
